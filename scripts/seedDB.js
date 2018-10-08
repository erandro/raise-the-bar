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
        "items": [
            {
                "name": "Vodka",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Liqueur Coffee",
                        "reveal": "Black Russian"
                    },
                    {
                        "item": "Tomato Juice",
                        "reveal": "Bloody Mary"
                    },
                    {
                        "item": "Orange Juice",
                        "reveal": "Screwdriver"
                    },
                    {
                        "item": "Ginger Beer",
                        "reveal": "Moscow Mule"
                    },
                    {
                        "item": "Cranberry Juice",
                        "reveal": "Vodka Cranberry"
                    }
                ]
            },
            {
                "name": "Gin",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Dry Vermouth",
                        "reveal": "Martini"
                    },
                    {
                        "item": "Sour",
                        "reveal": "South Side"
                    },
                    {
                        "item": "Tonic",
                        "reveal": "Gin and Tonic"
                    },
                    {
                        "item": "Tomato Juice",
                        "reveal": "Red Snapper"
                    },
                    {
                        "item": "Bitters",
                        "reveal": "Pegu Club"
                    }
                ]
            },
            {
                "name": "Tequila",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Sour",
                        "reveal": "Tequila Sour"
                    },
                    {
                        "item": "Orange Juice",
                        "reveal": "Tequila Screwdriver"
                    },
                    {
                        "item": "Grapefruit Juice",
                        "reveal": "Paloma"
                    }
                ]
            },
            {
                "name": "Rum",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Bitters",
                        "reveal": "Old Fashioned"
                    },
                    {
                        "item": "Coke",
                        "reveal": "Cuba Libre"
                    },
                    {
                        "item": "Coco Colada",
                        "reveal": "Piña Colada"
                    },
                    {
                        "item": "Sour",
                        "reveal": "Daiquiri"
                    },
                    {
                        "item": "Ginger Beer",
                        "reveal": "Dark and Stormy"
                    },
                    {
                        "item": "Lemon Juice",
                        "reveal": "Mojito"
                    }
                ]
            },
            {
                "name": "Bourbon",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Sour",
                        "reveal": "Whiskey Sour"
                    },
                    {
                        "item": "Soda",
                        "reveal": "Whiskey Soda"
                    },
                    {
                        "item": "Coke",
                        "reveal": "Whiskey Coke"
                    },
                    {
                        "item": "Sweet Vermouth",
                        "reveal": "Manhattan"
                    }
                ]
            },
            {
                "name": "Scotch",
                "img": "",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Bitters",
                        "reveal": "Old Fashioned"
                    },
                    {
                        "item": "Soda",
                        "reveal": "Whiskey Soda"
                    },
                    {
                        "item": "Coke",
                        "reveal": "Whiskey Coke"
                    },
                    {
                        "item": "Sweet Vermouth",
                        "reveal": "Rob Roy"
                    }
                ]
            }
        ]
    },
    {
        "name": "Juice",
        "img": "",
        "items": [
            {
                "name": "Orange juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Vodka",
                        "reveal": "Screwdriver"
                    },
                    {
                        "item": "Tequila",
                        "reveal": "Tequila Screwdriver"
                    },
                    {
                        "item": "Champaign",
                        "reveal": "Mimosa"
                    },
                    {
                        "item": "Sweet Martini",
                        "reveal": "Bronx"
                    },
                    {
                        "item": "Campari",
                        "reveal": "Garibaldi"
                    }
                ]
            },
            {
                "name": "Tomato Juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Vodka",
                        "reveal": "Bloody Mary"
                    },
                    {
                        "item": "Gin",
                        "reveal": "Red Snapper"
                    }
                ]
            },
            {
                "name": "Lemon Juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Rum",
                        "reveal": "Mojito"
                    }
                ]
            },
            {
                "name": "Pineapple Juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Cream of Coconut",
                        "reveal": "Coco Colada"
                    }
                ]
            },
            {
                "name": "Cream of Coconut",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Pineapple Juice",
                        "reveal": "Coco Colada"
                    }
                ]
            },
            {
                "name": "Grapefruit Juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Tequila",
                        "reveal": "Paloma"
                    },
                    {
                        "item": "Daiquiri",
                        "reveal": "Hemingway"
                    }
                ]
            },
            {
                "name": "Cranberry Juice",
                "img": "",
                "category": "Juice",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Vodka",
                        "reveal": "Vodka Cranberry"
                    }
                ]
            }
        ]
    },
    {
        "name": "Mixers",
        "img": "",
        "items": [
            {
                "name": "Coke",
                "img": "",
                "category": "Mixers",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Rum",
                        "reveal": "Cuba Libre"
                    },
                    {
                        "item": "Bourbon",
                        "reveal": "Whiskey Coke"
                    },
                    {
                        "item": "Scotch",
                        "reveal": "Whiskey Coke"
                    }
                ]
            },
            {
                "name": "Sprite",
                "img": "",
                "category": "Mixers",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Beer",
                        "reveal": "Shandy"
                    },
                    {
                        "item": "Grenadine",
                        "reveal": "Shirley Temple"
                    },
                    {
                        "item": "Wine",
                        "reveal": "Tinto De Verano"
                    }
                ]
            },
            {
                "name": "Soda",
                "img": "",
                "category": "Mixers",
                "available": true,
                "mixed_items": [
                    {
                        "item": "South Side",
                        "reveal": "Tom Collins"
                    },
                    {
                        "item": "Wine",
                        "reveal": "Spritz"
                    },
                    {
                        "item": "Bourbon",
                        "reveal": "Whiskey Soda"
                    },
                    {
                        "item": "Scotch",
                        "reveal": "Whiskey Soda"
                    },
                    {
                        "item": "Negroni",
                        "reveal": "Americano"
                    }
                ]
            },
            {
                "name": "Tonic",
                "img": "",
                "category": "Mixers",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Gin",
                        "reveal": "Gin and Tonic"
                    }
                ]
            },
            {
                "name": "Ginger Beer",
                "img": "",
                "category": "Mixers",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Vodka",
                        "reveal": "Moscow Mule"
                    },
                    {
                        "item": "Rum",
                        "reveal": "Dark and Stormy"
                    }
                ]
            }
        ]
    },
    {
        "name": "Flavoring Liquids",
        "img": "",
        "items": [
            {
                "name": "Half&Half",
                "img": "",
                "category": "Flavoring Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Black Russian",
                        "reveal": "White Russian"
                    }
                ]
            },
            {
                "name": "Bitters",
                "img": "",
                "category": "Flavoring Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Rum",
                        "reveal": "Old Fashioned"
                    },
                    {
                        "item": "Gin",
                        "reveal": "Pegu Club"
                    }
                ]
            },
            {
                "name": "Sour",
                "img": "",
                "category": "Flavoring Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Gin",
                        "reveal": "South Side"
                    },
                    {
                        "item": "Bourbon",
                        "reveal": "Whiskey Sour"
                    },
                    {
                        "item": "Rum",
                        "reveal": "Daiquiri"
                    },
                    {
                        "item": "Tequila",
                        "reveal": "Tequila Sour"
                    }
                ]
            },
            {
                "name": "Grenadine",
                "img": "",
                "category": "Flavoring Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Tequila Screwdriver",
                        "reveal": "Tequila Sunrise"
                    },
                    {
                        "item": "Piña Colada",
                        "reveal": "Bahama Mama"
                    },
                    {
                        "item": "Sprite",
                        "reveal": "Shirley Temple"
                    }
                ]
            }
        ]
    },
    {
        "name": "Low-Proof Liquids",
        "img": "",
        "items": [
            {
                "name": "Beer",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Sprite",
                        "reveal": "Shandy"
                    },
                    {
                        "item": "Champaign",
                        "reveal": "Black Velvet"
                    }
                ]
            },
            {
                "name": "Wine",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Sprite",
                        "reveal": "Tinto De Verano"
                    },
                    {
                        "item": "Soda",
                        "reveal": "Spritz"
                    },
                    {
                        "item": "Whiskey Sour",
                        "reveal": "New York Sour"
                    }
                ]
            },
            {
                "name": "Champaign",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Peach Liqueur",
                        "reveal": "Bellini"
                    },
                    {
                        "item": "Crème de cassis",
                        "reveal": "Kir Royale"
                    },
                    {
                        "item": "Orange juice",
                        "reveal": "Mimosa"
                    },
                    {
                        "item": "Aperol",
                        "reveal": "Aperol "
                    },
                    {
                        "item": "Beer",
                        "reveal": "Black Velvet"
                    }
                ]
            },
            {
                "name": "Dry Vermouth",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Gin",
                        "reveal": "Martini"
                    }
                ]
            },
            {
                "name": "Sweet Vermouth",
                "img": "",
                "category": "Low-Proof Liquids",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Gin",
                        "reveal": "Sweet Martini"
                    },
                    {
                        "item": "Bourbon",
                        "reveal": "Manhattan"
                    },
                    {
                        "item": "Scotch",
                        "reveal": "Rob Roy"
                    }
                ]
            }
        ]
    },
    {
        "name": "Liqueurs",
        "img": "",
        "items": [
            {
                "name": "Liqueur Coffee",
                "img": "",
                "category": "Liqueurs",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Vodka",
                        "reveal": "Black Russian"
                    }
                ]
            },
            {
                "name": "Peach Liqueur",
                "img": "",
                "category": "Liqueurs",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Champaign",
                        "reveal": "Bellini"
                    }
                ]
            },
            {
                "name": "Crème de cassis",
                "img": "",
                "category": "Liqueurs",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Champaign",
                        "reveal": "Kir Royale"
                    }
                ]
            },
            {
                "name": "Campari",
                "img": "",
                "category": "Liqueurs",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Sweet Martini",
                        "reveal": "Negroni"
                    },
                    {
                        "item": "Orange Juice",
                        "reveal": "Garibaldi"
                    }
                ]
            },
            {
                "name": "Aperol",
                "img": "",
                "category": "Liqueurs",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Spritz",
                        "reveal": "Aperol Spritz"
                    },
                    {
                        "item": "Champaign",
                        "reveal": "Aperol Spritz"
                    }
                ]
            },
            {
                "name": "Triple Sec",
                "img": "",
                "category": "Liqueurs",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Vodka Cranberry",
                        "reveal": "Cosmopolitan"
                    },
                    {
                        "item": "Tequila Sour",
                        "reveal": "Margarita"
                    }
                ]
            }
        ]
    },
    {
        "name": "Rum Cocktails",
        "img": "",
        "items": [
            {
                "name": "Mojito",
                "img": "",
                "category": "Rum Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Hemingway",
                "img": "",
                "category": "Rum Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Dark and Stormy",
                "img": "",
                "category": "Rum Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Daiquiri",
                "img": "",
                "category": "Rum Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Old Fashioned",
                "img": "",
                "category": "Rum Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Cuba Libre",
                "img": "",
                "category": "Rum Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Piña Colada",
                "img": "",
                "category": "Rum Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Grenadine",
                        "reveal": "Bahama Mama"
                    }
                ]
            },
            {
                "name": "Bahama Mama",
                "img": "",
                "category": "Rum Cocktails",
                "available": true,
                "mixed_items": []
            }
        ]
    },
    {
        "name": "Tequila Cocktails",
        "img": "",
        "items": [
            {
                "name": "Tequila Sunrise",
                "img": "",
                "category": "Tequila Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Margarita",
                "img": "",
                "category": "Tequila Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Paloma",
                "img": "",
                "category": "Tequila Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Tequila Sour",
                "img": "",
                "category": "Tequila Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Triple Sec",
                        "reveal": "Margarita"
                    }
                ]
            },
            {
                "name": "Tequila Screwdriver",
                "img": "",
                "category": "Tequila Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Grenadine",
                        "reveal": "Tequila Sunrise"
                    }
                ]
            }
        ]
    },
    {
        "name": "Gin Cocktails",
        "img": "",
        "items": [
            {
                "name": "Pegu Club",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Red Snapper",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Tom Collins",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Bronx",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Gin and Tonic",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Martini",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Americano",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "South Side",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Soda",
                        "reveal": "Tom Collins"
                    }
                ]
            },
            {
                "name": "Sweet Martini",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Campari",
                        "reveal": "Negroni"
                    },
                    {
                        "item": "Orange Juice",
                        "reveal": "Bronx"
                    }
                ]
            },
            {
                "name": "Negroni",
                "img": "",
                "category": "Gin Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Soda",
                        "reveal": "Americano"
                    }
                ]
            }
        ]
    },
    {
        "name": "Vodka Cocktails",
        "img": "",
        "items": [
            {
                "name": "White Russian",
                "img": "",
                "category": "Vodka Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Bloody Mary",
                "img": "",
                "category": "Vodka Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Screwdriver",
                "img": "",
                "category": "Vodka Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Moscow Mule",
                "img": "",
                "category": "Vodka Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Cosmopolitan",
                "img": "",
                "category": "Vodka Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Vodka Cranberry",
                "img": "",
                "category": "Vodka Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Triple Sec",
                        "reveal": "Cosmopolitan"
                    }
                ]
            },
            {
                "name": "Black Russian",
                "img": "",
                "category": "Vodka Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Half&Half",
                        "reveal": "White Russian"
                    }
                ]
            }
        ]
    },
    {
        "name": "Champaign and Wine Cocktails",
        "img": "",
        "items": [
            {
                "name": "Aperol Spritz",
                "img": "",
                "category": "Champaign and Wine Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Spritz",
                "img": "",
                "category": "Champaign and Wine Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Tinto De Verano",
                "img": "",
                "category": "Champaign and Wine Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Kir Royale",
                "img": "",
                "category": "Champaign and Wine Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Mimosa",
                "img": "",
                "category": "Champaign and Wine Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Bellini",
                "img": "",
                "category": "Champaign and Wine Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Black Velvet",
                "img": "",
                "category": "Champaign and Wine Cocktails",
                "available": true,
                "mixed_items": []
            }
        ]
    },
    {
        "name": "Whiskey Cocktails",
        "img": "",
        "items": [
            {
                "name": "Whiskey Coke",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Whiskey Soda",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Manhattan",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Rob Roy",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "New York Sour",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Whiskey Sour",
                "img": "",
                "category": "Whiskey Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Wine",
                        "reveal": "New York Sour"
                    }
                ]
            }
        ]
    },
    {
        "name": "Mocktails and other Cocktails",
        "img": "",
        "items": [
            {
                "name": "Shirley Temple",
                "img": "",
                "category": "Mocktails and other Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Garibaldi",
                "img": "",
                "category": "Mocktails and other Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Shandy",
                "img": "",
                "category": "Mocktails and other Cocktails",
                "available": true,
                "mixed_items": []
            },
            {
                "name": "Coco Colada",
                "img": "",
                "category": "Mocktails and other Cocktails",
                "available": true,
                "mixed_items": [
                    {
                        "item": "Rum",
                        "reveal": "Piña Colada"
                    }
                ]
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