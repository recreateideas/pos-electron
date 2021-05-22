const { v4: uuidv4 } = require('uuid');

const burgers = {
    label: 'Burgers',
    items: [
        {
            name: 'Classic Beef',
            imageUrl:
                'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-5-600x900.jpg',
            price: 15,
            id: uuidv4()
        },
        {
            name: 'Bacon + Cheese',
            imageUrl:
                'https://ribsandburgers.com/au/wp-content/uploads/2019/03/2-angus-bacon-and-cheese.jpg',
            price: 16,
            id: uuidv4()
        },
        {
            name: 'La morte sua',
            imageUrl:
                'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?s=612x612',
            price: 18,
            id: uuidv4()
        },
        {
            name: 'Rabbit and marmelade',
            imageUrl:
                'https://www.thelastfoodblog.com/wp-content/uploads/2017/04/Halloumi-Burger.jpg',
            price: 21,
            id: uuidv4()
        },
        {
            name: 'Sea spray + jellyfish',
            imageUrl: 'https://tul.imgix.net/content/article/burger-hounds.jpg',
            price: 8,
            id: uuidv4()
        },
        {
            name: 'Yeah boy',
            imageUrl:
                'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-5-600x900.jpg',
            price: 15,
            id: uuidv4()
        },
        {
            name: 'Dude, where is my car?',
            imageUrl:
                'https://ribsandburgers.com/au/wp-content/uploads/2019/03/2-angus-bacon-and-cheese.jpg',
            price: 16,
            id: uuidv4()
        },
        {
            name: 'Jimi Hendrix',
            imageUrl:
                'https://media.istockphoto.com/photos/cheeseburger-isolated-on-white-picture-id1157515115?s=612x612',
            price: 18,
            id: uuidv4()
        }
    ]
};
const sides = {
    label: 'Sides',
    items: [
        {
            name: 'Onion rings',
            imageUrl:
                'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7f539fc41a5543aebfe03afed73a0b48/BFV9112_MozzarellaStickOnionRings.jpg',
            price: 8,
            id: uuidv4()
        },
        {
            name: 'French fries',
            imageUrl:
                'https://c.ndtvimg.com/french-fries_625x300_1528454061766.jpg',
            price: 7,
            id: uuidv4()
        },
        {
            name: 'Heart attack fries',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ibgSaNIL-MFb1XhMfHa3el48l9OeBB4USA&usqp=CAU',
            price: 10,
            id: uuidv4()
        }
    ]
};

module.exports = {
    burgers,
    sides
};
