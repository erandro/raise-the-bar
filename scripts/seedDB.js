const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Bar collection and inserts the Bar categories and items below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/bar_DB"
);

const barSeed = [
    {
        "name": "Base Spirits",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Vodka",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": {
                    "Liqueur Coffee": "Black Russian",
                    "Tomato Juice": "Bloody Mary",
                    "Orange Juice": "Screwdriver",
                    "Ginger Beer": "Moscow Mule",
                    "Cranberry Juice": "Vodka Cranberry"
                }
            },
            {
                "name": "Gin",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": {
                    "Dry Vermouth": "Martini",
                    "Sour": "South Side",
                    "Tonic": "Gin and Tonic",
                    "Tomato Juice": "Red Snapper",
                    "Bitters": "Pegu Club"
                }
            },
            {
                "name": "Tequila",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": {
                    "Sour": "Tequila Sour",
                    "Orange Juice": "Tequila Screwdriver",
                    "Grapefruit Juice": "Paloma"
                }
            },
            {
                "name": "Rum",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": {
                    "Bitters": "Old Fashioned",
                    "Coke": "Cuba Libre",
                    "Coco Colada": "Piña Colada",
                    "Sour": "Daiquiri",
                    "Ginger Beer": "Dark and Stormy",
                    "Lemon Juice": "Mojito"
                }
            },
            {
                "name": "Bourbon",
                "img": "",
                "category": "Base Spirits",
                "available": false,
                "mixed_items": {
                    "Sour": "Whiskey Sour",
                    "Soda": "Whiskey Soda",
                    "Coke": "Whiskey Coke",
                    "Sweet Vermouth": "Manhattan"
                }
            },
            {
                "name": "Scotch",
                "img": "",
                "category": "Base Spirits",
                "available": false,
                "mixed_items": {
                    "Bitters": "Old Fashioned",
                    "Soda": "Whiskey Soda",
                    "Coke": "Whiskey Coke",
                    "Sweet Vermouth": "Rob Roy"
                }
            }
        ]
    },
    {
        "name": "Juice",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Orange Juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": {
                    "Vodka": "Screwdriver",
                    "Tequila": "Tequila Screwdriver",
                    "Champagne": "Mimosa",
                    "Sweet Martini": "Bronx",
                    "Campari": "Garibaldi"
                }
            },
            {
                "name": "Tomato Juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": {
                    "Vodka": "Bloody Mary",
                    "Gin": "Red Snapper"
                }
            },
            {
                "name": "Lemon Juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": {
                    "Rum": "Mojito"
                }
            },
            {
                "name": "Pineapple Juice",
                "img": "",
                "category": "Juice",
                "available": false,
                "mixed_items": {
                    "Cream of Coconut": "Coco Colada"
                }
            },
            {
                "name": "Cream of Coconut",
                "img": "",
                "category": "Juice",
                "available": false,
                "mixed_items": {
                    "Pineapple Juice": "Coco Colada"
                }
            },
            {
                "name": "Grapefruit Juice",
                "img": "",
                "category": "Juice",
                "available": false,
                "mixed_items": {
                    "Tequila": "Paloma",
                    "Daiquiri": "Hemingway"
                }
            },
            {
                "name": "Cranberry Juice",
                "img": "",
                "category": "Juice",
                "available": false,
                "mixed_items": {
                    "Vodka": "Vodka Cranberry"
                }
            }
        ]
    },
    {
        "name": "Mixers",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Coke",
                "img": "",
                "category": "Mixers",
                "available": true,
                "mixed_items": {
                    "Rum": "Cuba Libre",
                    "Bourbon": "Whiskey Coke",
                    "Scotch": "Whiskey Coke"
                }
            },
            {
                "name": "Sprite",
                "img": "",
                "category": "Mixers",
                "available": false,
                "mixed_items": {
                    "Beer": "Shandy",
                    "Grenadine": "Shirley Temple",
                    "Wine": "Tinto De Verano"
                }
            },
            {
                "name": "Soda",
                "img": "",
                "category": "Mixers",
                "available": false,
                "mixed_items": {
                    "South Side": "Tom Collins",
                    "Wine": "Spritz",
                    "Bourbon": "Whiskey Soda",
                    "Scotch": "Whiskey Soda",
                    "Negroni": "Americano"
                }
            },
            {
                "name": "Tonic",
                "img": "",
                "category": "Mixers",
                "available": true,
                "mixed_items": {
                    "Gin": "Gin and Tonic"
                }
            },
            {
                "name": "Ginger Beer",
                "img": "",
                "category": "Mixers",
                "available": true,
                "mixed_items": {
                    "Vodka": "Moscow Mule",
                    "Rum": "Dark and Stormy"
                }
            }
        ]
    },
    {
        "name": "Flavoring Liquids",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Half&Half",
                "img": "",
                "category": "Flavoring Liquids",
                "available": false,
                "mixed_items": {
                    "Black Russian": "White Russian"
                }
            },
            {
                "name": "Bitters",
                "img": "",
                "category": "Flavoring Liquids",
                "available": false,
                "mixed_items": {
                    "Rum": "Old Fashioned",
                    "Gin": "Pegu Club"
                }
            },
            {
                "name": "Sour",
                "img": "",
                "category": "Flavoring Liquids",
                "available": false,
                "mixed_items": {
                    "Gin": "South Side",
                    "Bourbon": "Whiskey Sour",
                    "Rum": "Daiquiri",
                    "Tequila": "Tequila Sour"
                }
            },
            {
                "name": "Grenadine",
                "img": "",
                "category": "Flavoring Liquids",
                "available": false,
                "mixed_items": {
                    "Tequila Screwdriver": "Tequila Sunrise",
                    "Piña Colada": "Bahama Mama",
                    "Sprite": "Shirley Temple"
                }
            }
        ]
    },
    {
        "name": "Low-Proof Liquids",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Beer",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": false,
                "mixed_items": {
                    "Sprite": "Shandy",
                    "Champagne": "Black Velvet"
                }
            },
            {
                "name": "Wine",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": false,
                "mixed_items": {
                    "Sprite": "Tinto De Verano",
                    "Soda": "Spritz",
                    "Whiskey Sour": "New York Sour"
                }
            },
            {
                "name": "Champagne",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": false,
                "mixed_items": {
                    "Peach Liqueur": "Bellini",
                    "Crème de cassis": "Kir Royale",
                    "Orange Juice": "Mimosa",
                    "Aperol": "Aperol Spritz",
                    "Beer": "Black Velvet"
                }
            },
            {
                "name": "Dry Vermouth",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": false,
                "mixed_items": {
                    "Gin": "Martini"
                }
            },
            {
                "name": "Sweet Vermouth",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": false,
                "mixed_items": {
                    "Gin": "Sweet Martini",
                    "Bourbon": "Manhattan",
                    "Scotch": "Rob Roy"
                }
            }
        ]
    },
    {
        "name": "Liqueurs",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Liqueur Coffee",
                "img": "",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Vodka": "Black Russian"
                }
            },
            {
                "name": "Peach Liqueur",
                "img": "",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Champagne": "Bellini"
                }
            },
            {
                "name": "Crème de cassis",
                "img": "",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Champagne": "Kir Royale"
                }
            },
            {
                "name": "Campari",
                "img": "",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Sweet Martini": "Negroni",
                    "Orange Juice": "Garibaldi"
                }
            },
            {
                "name": "Aperol",
                "img": "",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Spritz": "Aperol Spritz",
                    "Champagne": "Aperol Spritz"
                }
            },
            {
                "name": "Triple Sec",
                "img": "",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Vodka Cranberry": "Cosmopolitan",
                    "Tequila Sour": "Margarita"
                }
            }
        ]
    },
    {
        "name": "Rum Cocktails",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Mojito",
                "img": "",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Hemingway",
                "img": "",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Dark and Stormy",
                "img": "",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Daiquiri",
                "img": "",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {
                    "Grapefruit Juice": "Hemingway"
                }
            },
            {
                "name": "Old Fashioned",
                "img": "",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Cuba Libre",
                "img": "",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Piña Colada",
                "img": "",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {
                    "Grenadine": "Bahama Mama"
                }
            },
            {
                "name": "Bahama Mama",
                "img": "",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            }
        ]
    },
    {
        "name": "Tequila Cocktails",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Tequila Sunrise",
                "img": "",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Margarita",
                "img": "",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Paloma",
                "img": "",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Tequila Sour",
                "img": "",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {
                    "Triple Sec": "Margarita"
                }
            },
            {
                "name": "Tequila Screwdriver",
                "img": "",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {
                    "Grenadine": "Tequila Sunrise"
                }
            }
        ]
    },
    {
        "name": "Gin Cocktails",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Pegu Club",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Red Snapper",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Tom Collins",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Bronx",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Gin and Tonic",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Martini",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Americano",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "South Side",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {
                    "Soda": "Tom Collins"
                }
            },
            {
                "name": "Sweet Martini",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {
                    "Campari": "Negroni",
                    "Orange Juice": "Bronx"
                }
            },
            {
                "name": "Negroni",
                "img": "",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {
                    "Soda": "Americano"
                }
            }
        ]
    },
    {
        "name": "Vodka Cocktails",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "White Russian",
                "img": "",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Bloody Mary",
                "img": "",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Screwdriver",
                "img": "",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Moscow Mule",
                "img": "",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Cosmopolitan",
                "img": "",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Vodka Cranberry",
                "img": "",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {
                    "Triple Sec": "Cosmopolitan"
                }
            },
            {
                "name": "Black Russian",
                "img": "",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {
                    "Half&Half": "White Russian"
                }
            }
        ]
    },
    {
        "name": "Wine Cocktails",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Aperol Spritz",
                "img": "",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Spritz",
                "img": "",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Tinto De Verano",
                "img": "",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Kir Royale",
                "img": "",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Mimosa",
                "img": "",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Bellini",
                "img": "",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Black Velvet",
                "img": "",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            }
        ]
    },
    {
        "name": "Whiskey Cocktails",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Whiskey Coke",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Whiskey Soda",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Manhattan",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Rob Roy",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "New York Sour",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Whiskey Sour",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {
                    "Wine": "New York Sour"
                }
            }
        ]
    },
    {
        "name": "No Spirit Cocktails",
        "img": "",
        "available": true,
        "items": [
            {
                "name": "Shirley Temple",
                "img": "",
                "category": "No Spirit Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Garibaldi",
                "img": "",
                "category": "No Spirit Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Shandy",
                "img": "",
                "category": "No Spirit Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Coco Colada",
                "img": "",
                "category": "No Spirit Cocktails",
                "available": false,
                "mixed_items": {
                    "Rum": "Piña Colada"
                }
            }
        ]
    }
];

db.Bar
    .remove({})
    .then(() => db.Bar.collection.insertMany(barSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });