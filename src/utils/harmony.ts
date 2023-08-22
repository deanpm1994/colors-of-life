import chroma from 'chroma-js';

export type Color = number | string | chroma.Color;

/**
 * `shades` adds black
 *
 * `tones` adds gray
 *
 * `tints` adds white
 */
export type MonochromaticVariation = 'shades' | 'tones' | 'tints';

export class Harmony {
	constructor(public color: Color, public space: chroma.InterpolationMode = 'oklch', public correctLightness: boolean = true) {}
	/**
	 * Generate a sequential color scale for continous data
	 */
	public sequential(): chroma.Scale {
    const [h, s] = chroma(this.color).hsl();
    return this.scale([chroma(h, s, 0.95, 'hsl'), chroma(h, s, 0.2, 'hsl')]).correctLightness(this.correctLightness);
	}

	/**
	 * Generate a diverging color scale for when a critical data class or break point needs to be emphasized
	 */
	public diverging(): chroma.Scale {
		const [h, s] = chroma(this.color).hsl();

		return this.scale([
			chroma(h - 180, s, 0.2, 'hsl'),
			chroma(h - 180, s, 0.5, 'hsl'),
			chroma(h + 90, s, 0.95, 'hsl'),
			chroma(h, s, 0.5, 'hsl'),
			chroma(h, s, 0.2, 'hsl'),
		]);
	}

	public qualitative(count: number): chroma.Color[] {
		// Round up to nearest integer just in case
		count = Math.ceil(count);
		if (count < 2) return [chroma(this.color)];
		if (count == 2) return [chroma(this.color), this.shiftHue(this.color, 180)];
		if (count == 3) return this.triadic();
		if (count == 4) return this.tetradic();
		if (count <= 12) return this.analogous(count, 160);
		return this.sequential()
			.colors(count)
			.map((c) => chroma(c));
	}

	public monochromatic(range: number = 2, variation: MonochromaticVariation = 'tints'): chroma.Scale {
		const chromaColor = chroma(this.color);
		let monochromeScaleEnd: chroma.Color;
		switch (variation) {
			case 'shades':
				monochromeScaleEnd = chromaColor.darken(range);
				break;
			case 'tones':
				monochromeScaleEnd = chromaColor.desaturate(range);
				break;
			case 'tints':
				monochromeScaleEnd = chromaColor.brighten(range);
				break;
			default:
				throw TypeError(`Unknown monochromatic variation ${variation}`);
		}
		return this.scale([chromaColor, monochromeScaleEnd]).correctLightness(this.correctLightness);
	}

	/**
	 * Generates a color palette by selecting equidistant hues in the range [color.h - angle, color.h + angle]
	 * @returns an analogous color palette of n Chroma Colors
	 */
	analogous(count: number = 5, angle: number = 15): chroma.Color[] {
		const startChroma = this.shiftHue(this.color, -angle);
		const colors = [];
		const angleInterval = (angle * 2) / (count - 1);
		for (let i = 0; i < count; i++) {
			colors.push(this.shiftHue(startChroma, angleInterval * i));
		}
		return colors;
	}

	/**
	 * Generates a complementary color palette range from the input color to the hue opposite color
	 * @returns a chroma {@link chroma.Scale}
	 */
	public complementary(): chroma.Scale {
		const [h, s] = chroma(this.color).hsl();

		return this.scale([chroma(h - 180, s, 0.2, 'hsl'), chroma(h - 180, s, 0.5, 'hsl'), chroma(h, s, 0.5, 'hsl'), chroma(h, s, 0.2, 'hsl')]);
	}

	/**
	 * Generates a color palette by rotating the hue of the input color by [-angle, 0, angle]
	 * @returns a split complementary color palette of 3 Chroma Colors
	 */
	public splitComplementary(angle: number = 150): [chroma.Color, chroma.Color, chroma.Color] {
		return this.analogous(3, angle) as [chroma.Color, chroma.Color, chroma.Color];
	}

	/**
	 * Generates a color palette by rotating the hue of the input color by [-120, 0, 120]
	 * @returns a triadic color palette of 3 Chroma Colors
	 */
	public triadic(): [chroma.Color, chroma.Color, chroma.Color] {
		return this.splitComplementary(120);
	}

	/**
	 * Generates a color palette by rotating the hue of the input color by [0, 60, 180, 240]
	 * @returns a tetradic color palette of 4 Chroma Colors
	 */
	public tetradic(): [chroma.Color, chroma.Color, chroma.Color, chroma.Color] {
		return [chroma(this.color), this.shiftHue(this.color, 60), this.shiftHue(this.color, 180), this.shiftHue(this.color, 240)];
	}

	/**
	 * Generates a color palette by rotating the hue of the input color by [0, 90, 180, 270]
	 * @returns a square color palette of 4 Chroma Colors
	 */
	public square(): [chroma.Color, chroma.Color, chroma.Color, chroma.Color] {
		return [chroma(this.color), this.shiftHue(this.color, 90), this.shiftHue(this.color, 180), this.shiftHue(this.color, 270)];
	}

	private scale(colors: chroma.Color | chroma.Color[]): chroma.Scale {
		// @ts-ignore
		return chroma.scale(colors).cache(false).mode(this.space);
	}

	get colorSpace() {
		switch (this.space) {
			case 'lab':
			case 'lch':
			case 'hcl':
				return 'lch';
			case 'oklch':
			case 'oklab':
				return 'oklch';
			default:
				return 'hsl';
		}
	}

	shiftHue(color: Color, angle: number) {
		const hueIndex = this.colorSpace === 'hsl' ? 0 : 2;
		const chromaColor = chroma(color)[this.colorSpace]();

		chromaColor[hueIndex] += angle;
		return chroma(chromaColor, this.colorSpace);
	}
}

export default Harmony;