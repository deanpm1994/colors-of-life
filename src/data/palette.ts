type CityColor = {
  name: string
  value: string
  description?: string
}

type CityPalette = {
  colors: CityColor[]
}

export const cities: Array<{
  city: string
  description?: string
  palette: CityPalette
}> = [
  {
    city: 'Lisbon',
    palette: {
      colors: [
        {
          name: 'Cerulean Blue',
          value: '#0074C8',
          description: "Blue representing Lisbon's iconic blue tiles."
        },
        {
          name: 'Terracotta Red',
          value: '#C73E1D',
          description: "Reddish-orange for Lisbon's warm terracotta roofs."
        },
        {
          name: 'Golden Yellow',
          value: '#F9A825',
          description: "Golden yellow for Lisbon's sunny and cheerful atmosphere."
        },
        {
          name: 'Pastel Pink',
          value: '#FFB4C1',
          description: "Soft pink reflecting Lisbon's elegant charm."
        },
        {
          name: 'Seafoam Green',
          value: '#00A896',
          description: "Cool green-blue for Lisbon's ocean influence."
        },
        {
          name: 'Warm Beige',
          value: '#D2B48C',
          description: "Beige representing Lisbon's historic streets."
        }
      ]
    }
  },
  {
    city: 'Madrid',
    palette: {
      colors: [
        {
          name: 'Royal Blue',
          value: '#0054A4',
          description: "Elegant blue representing Madrid's historical significance."
        },
        {
          name: 'Terracotta Orange',
          value: '#E64A19',
          description: "Warm orange capturing Madrid's vibrant energy."
        },
        {
          name: 'Golden Yellow',
          value: '#FBC02D',
          description: "Cheerful yellow reflecting Madrid's sunny disposition."
        },
        {
          name: 'Whitewashed Cream',
          value: '#F5F5F5',
          description: "Neutral cream symbolizing Madrid's architecture."
        },
        {
          name: 'Deep Red',
          value: '#D32F2F',
          description: "Deep red representing Madrid's passion and heritage."
        },
        {
          name: 'Olive Green',
          value: '#4CAF50',
          description: "Lush green reflecting Madrid's parks and gardens."
        }
      ]
    }
  },
  {
    city: 'Havana',
    palette: {
      colors: [
        {
          name: 'Tropical Teal',
          value: '#00796B',
          description: "Vibrant teal capturing Havana's tropical atmosphere."
        },
        {
          name: 'Sandy Beige',
          value: '#D4C7A9',
          description: 'Warm beige reflecting the sandy beaches and rustic charm.'
        },
        {
          name: 'Sunset Orange',
          value: '#FF5722',
          description: "Warm orange symbolizing Havana's breathtaking sunsets."
        },
        {
          name: 'Cuban Pink',
          value: '#E91E63',
          description: "Vibrant pink reminiscent of Havana's colorful facades."
        },
        {
          name: 'Classic Car Blue',
          value: '#1976D2',
          description: "Nostalgic blue representing Havana's iconic classic cars."
        },
        {
          name: 'Mint Mojito Green',
          value: '#8BC34A',
          description: "Lively green inspired by Havana's greenery and mojito drinks."
        }
      ]
    }
  },
  {
    city: 'Rome',
    palette: {
      colors: [
        {
          name: 'Roman Red',
          value: '#D32F2F',
          description: "Deep red symbolizing Rome's historic architecture."
        },
        {
          name: 'Marble White',
          value: '#FFFFFF',
          description: "Pure white reflecting Rome's pristine marble landmarks."
        },
        {
          name: 'Ancient Gold',
          value: '#FFD700',
          description: "Golden color representing Rome's gilded art and architecture."
        },
        {
          name: 'Cypress Green',
          value: '#388E3C',
          description: "Vibrant green for Rome's lush parks and gardens."
        },
        {
          name: 'Eternal Blue',
          value: '#1565C0',
          description: "Serene blue inspired by Rome's skies and the Mediterranean."
        },
        {
          name: 'Terracotta Brown',
          value: '#8D6E63',
          description: "Brown evoking Rome's terracotta rooftops and history."
        }
      ]
    }
  }
]