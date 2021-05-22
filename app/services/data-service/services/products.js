const { v4: uuidv4 } = require('uuid');

const queryProducts = () => {
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
                imageUrl:
                    'https://tul.imgix.net/content/article/burger-hounds.jpg',
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
                name: 'Salmon + Watermelon',
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
            },
            {
                name: 'Dude, where is my car?',
                imageUrl:
                    'https://www.thelastfoodblog.com/wp-content/uploads/2017/04/Halloumi-Burger.jpg',
                price: 21,
                id: uuidv4()
            },
            {
                name: 'Mediterranean olives + chilli',
                imageUrl:
                    'https://tul.imgix.net/content/article/burger-hounds.jpg',
                price: 8,
                id: uuidv4()
            }
        ]
    };
    return { burgers };
};

module.exports = {
    queryProducts
};
