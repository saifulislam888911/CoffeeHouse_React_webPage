import espressoImg from '../assets/images/menu/espresso.jpg'
import cappuccinoImg from '../assets/images/menu/cappuccino.jpg'
import latteImg from '../assets/images/menu/latte.jpg'
import icedCoffeeImg from '../assets/images/menu/iced-coffee.jpg'
import mochaImg from '../assets/images/menu/mocha.jpg'
import americanoImg from '../assets/images/menu/americano.jpg'
import coldBrewImg from '../assets/images/menu/cold-brew.jpg'
import frappuccinoImg from '../assets/images/menu/frappuccino.jpg'

const menuItems = [
  {
    id: 1,
    name: 'Espresso',
    price: '$3.50',
    category: 'Hot',
    origin: 'Italy',
    notes: 'Velvety crema with cocoa and toasted sugar',
    image: espressoImg,
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: '$4.50',
    category: 'Hot',
    origin: 'Dhaka',
    notes: 'Honey foam, nutmeg dusting, micro-foam art',
    image: cappuccinoImg,
  },
  {
    id: 3,
    name: 'Latte',
    price: '$4.75',
    category: 'Hot',
    origin: 'Brazil',
    notes: 'Silky steamed milk with caramel drizzle',
    image: latteImg,
  },
  {
    id: 4,
    name: 'Iced Coffee',
    price: '$3.75',
    category: 'Cold',
    origin: 'Colombia',
    notes: 'Slow-dripped with citrus zest and jaggery',
    image: icedCoffeeImg,
  },
  {
    id: 5,
    name: 'Mocha',
    price: '$5.00',
    category: 'Hot',
    origin: 'Peru',
    notes: 'Dark chocolate, cinnamon, whipped cloud',
    image: mochaImg,
  },
  {
    id: 6,
    name: 'Americano',
    price: '$3.25',
    category: 'Hot',
    origin: 'Ethiopia',
    notes: 'Bright crema with floral finish',
    image: americanoImg,
  },
  {
    id: 7,
    name: 'Cold Brew',
    price: '$4.25',
    category: 'Cold',
    origin: 'Kenya',
    notes: '16-hour brew, caramel body, clean finish',
    image: coldBrewImg,
  },
  {
    id: 8,
    name: 'Frappuccino',
    price: '$5.50',
    category: 'Cold',
    origin: 'House Blend',
    notes: 'Espresso frappe with vanilla bean cream',
    image: frappuccinoImg,
  },
]

export default menuItems


