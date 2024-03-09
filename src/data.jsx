import Women from './assets/women.png';
import Shopping from './assets/shopping.png';
import Sale from './assets/sale.png';

import Women2 from './assets/women2.jpg';
import Women3 from './assets/women3.jpg';
import Women4 from './assets/women4.jpg';

import Shirt1 from './assets/shirt.png';
import Shirt2 from './assets/shirt2.png';
import Shirt3 from './assets/shirt3.png';

export const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '/#services',
    },
    {
        id: 3,
        name: 'Kids Wear',
        link: '/#',
    },
    {
        id: 4,
        name: 'Mens Wear',
        link: '/#',
    },
    {
        id: 5,
        name: 'Trending',
        submenu: [
            {
                id: 5.1,
                name: 'Trending Products',
                link: '/#',
            },
            {
                id: 5.2,
                name: 'Best Selling',
                link: '/#',
            },
            {
                id: 5.3,
                name: 'Top Rated',
                link: '/#',
            }
        ]
    }
];

export const TopTrendsImgs = [
    {
        id: 1,
        img: Women,
        title: "Upto 50% off on all Men's Wear",
        description: "For all mens this is the biggest sale ever just loot it out at your first sight."
    },
    {
        id: 2,
        img: Shopping,
        title: "Upto 70% off on all Women's Wear",
        description: "For all womens this is the biggest sale ever just loot it out at your first sight."
    },
    {
        id: 3,
        img: Sale,
        title: "40% off on all Products Sale",
        description: "This is the biggest sale ever just loot it out at your first sight."
    }
];

export const ProductsData = [
    {
        id: 1,
        title: 'Women Enthnic',
        img: Women,
        rating: 5.0,
        color: 'white',
        aosDelay: '0',
    },
    {
        id: 2,
        title: 'Women Western',
        img: Women2,
        rating: 4.5,
        color: 'red',
        aosDelay: '200',
    },
    {
        id: 3,
        title: 'Goggles',
        img: Women3,
        rating: 4.7,
        color: 'brown',
        aosDelay: '400',
    },
    {
        id: 4,
        title: 'Printed T-Shirt',
        img: Women4,
        rating: 4.4,
        color: 'yellow',
        aosDelay: '600',
    },
    {
        id: 5,
        title: 'Fashion T-Shirt',
        img: Women,
        rating: 4.5,
        color: 'pink',
        aosDelay: '800',
    }
];


export const TopProductsData = [
    {
        id: 1,
        img: Shirt1,
        title: 'Casual Wear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur iure labore consequatur aperiam qui, assumenda',
    },
    {
        id: 2,
        img: Shirt2,
        title: 'Printed Shirt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur iure labore consequatur aperiam qui, assumenda',
    },
    {
        id: 3,
        img: Shirt3,
        title: 'Women Shirt',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur iure labore consequatur aperiam qui, assumenda',
    }
];

export const TestimonialData = [
    {
        id: 1,
        name: 'Karan',
        view: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: 'https://picsum.photos/101/101',
    },
    {
        id: 2,
        name: 'Saloni',
        view: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore eveniet cumque eum quam consectetur quaerat porro minima',
        img: 'https://picsum.photos/102/102',
    },
    {
        id: 3,
        name: 'Nobita',
        view: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore eveniet cumque eum quam consectetur',
        img: 'https://picsum.photos/103/103',
    },
    {
        id: 4,
        name: 'Kartik',
        view: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore eveniet cumque eum quam consectetur',
        img: 'https://picsum.photos/104/104',
    },
    {
        id: 5,
        name: 'Sagar',
        view: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore eveniet cumque eum quam consectetur',
        img: 'https://picsum.photos/105/105',
    },
];


export const FooterLinks = [
    {
        id: 1,
        title: 'Home',
        link: '/#'
    },
    {
        id: 2,
        title: 'About',
        link: '/#about'
    },
    {
        id: 3,
        title: 'Contact',
        link: '/#contact'
    },
    {
        id: 4,
        title: 'Blog',
        link: '/#blog'
    }
];