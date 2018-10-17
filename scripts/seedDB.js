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
        "img": "https://image.ibb.co/mwQSip/Base-Spirits.png",
        "available": true,
        "items": [
            {
                "name": "Vodka",
                "img": "https://image.ibb.co/mRMYOp/Vodka.png",
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
                "img": "https://image.ibb.co/cuSjUU/Gin.png",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": {
                    "Dry Vermouth": "Martini",
                    "Sweet Vermouth": "Sweet Martini",
                    "Sour": "South Side",
                    "Tonic": "Gin and Tonic",
                    "Tomato Juice": "Red Snapper",
                    "Bitters": "Pegu Club"
                }
            },
            {
                "name": "Tequila",
                "img": "https://image.ibb.co/mb8f3p/Tequila.png",
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
                "img": "https://image.ibb.co/ihkhG9/Rum.png",
                "category": "Base Spirits",
                "available": true,
                "mixed_items": {
                    "Coke": "Cuba Libre",
                    "Coco Colada": "Piña Colada",
                    "Sour": "Daiquiri",
                    "Ginger Beer": "Dark and Stormy",
                    "Lemon Juice": "Mojito"
                }
            },
            {
                "name": "Bourbon",
                "img": "https://image.ibb.co/cK4bb9/Bourbon.png",
                "category": "Base Spirits",
                "available": false,
                "mixed_items": {
                    "Sour": "Whiskey Sour",
                    "Soda": "Whiskey Soda",
                    "Coke": "Whiskey Coke",
                    "Bitters": "Old Fashioned",
                    "Sweet Vermouth": "Manhattan"
                }
            },
            {
                "name": "Scotch",
                "img": "https://image.ibb.co/kdFSip/Scotch.png",
                "category": "Base Spirits",
                "available": false,
                "mixed_items": {
                    "Soda": "Whiskey Soda",
                    "Coke": "Whiskey Coke",
                    "Sweet Vermouth": "Rob Roy"
                }
            }
        ]
    },
    {
        "name": "Juice",
        "img": "https://image.ibb.co/bSznip/Juice.png",
        "available": true,
        "items": [
            {
                "name": "Orange Juice",
                "img": "https://image.ibb.co/fht2G9/Orange-Juice.png",
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
                "img": "https://image.ibb.co/c8dPUU/Tomato-Juice.png",
                "category": "Juice",
                "available": true,
                "mixed_items": {
                    "Vodka": "Bloody Mary",
                    "Gin": "Red Snapper"
                }
            },
            {
                "name": "Lemon Juice",
                "img": "https://image.ibb.co/jAP9w9/Lemon-Juice.png",
                "category": "Juice",
                "available": true,
                "mixed_items": {
                    "Rum": "Mojito"
                }
            },
            {
                "name": "Pineapple Juice",
                "img": "https://image.ibb.co/gcW03p/Pineapple-Juice.png",
                "category": "Juice",
                "available": false,
                "mixed_items": {
                    "Cream of Coconut": "Coco Colada"
                }
            },
            {
                "name": "Cream of Coconut",
                "img": "https://image.ibb.co/e9PypU/Coconut-Cream.png",
                "category": "Juice",
                "available": false,
                "mixed_items": {
                    "Pineapple Juice": "Coco Colada"
                }
            },
            {
                "name": "Grapefruit Juice",
                "img": "https://image.ibb.co/nyqSip/Grapefruit-Juice.png",
                "category": "Juice",
                "available": false,
                "mixed_items": {
                    "Tequila": "Paloma",
                    "Daiquiri": "Hemingway"
                }
            },
            {
                "name": "Cranberry Juice",
                "img": "https://image.ibb.co/c0mB9U/Cranberry-Juice.png",
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
        "img": "https://image.ibb.co/d2tDOp/Mixers.png",
        "available": true,
        "items": [
            {
                "name": "Coke",
                "img": "https://image.ibb.co/d8RYOp/Coke.png",
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
                "img": "https://image.ibb.co/bK2jUU/Sprite.png",
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
                "img": "https://image.ibb.co/bHU9w9/Soda.png",
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
                "img": "https://image.ibb.co/fNAhG9/Tonic.png",
                "category": "Mixers",
                "available": true,
                "mixed_items": {
                    "Gin": "Gin and Tonic"
                }
            },
            {
                "name": "Ginger Beer",
                "img": "https://image.ibb.co/iDJDOp/Ginger-beer.png",
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
        "img": "https://image.ibb.co/npubb9/Flavoring-Liquids.png",
        "available": false,
        "items": [
            {
                "name": "Half&Half",
                "img": "https://image.ibb.co/dzGdpU/Half-Half.png",
                "category": "Flavoring Liquids",
                "available": false,
                "mixed_items": {
                    "Black Russian": "White Russian"
                }
            },
            {
                "name": "Bitters",
                "img": "https://image.ibb.co/ezbpw9/Bitters.png",
                "category": "Flavoring Liquids",
                "available": false,
                "mixed_items": {
                    "Bourbon": "Old Fashioned",
                    "Gin": "Pegu Club"
                }
            },
            {
                "name": "Sour",
                "img": "https://image.ibb.co/e81dpU/Sour.png",
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
                "img": "https://image.ibb.co/kBaGb9/Grenadine.png",
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
        "img": "https://image.ibb.co/caT2G9/Low-Proof-Liquids.png",
        "available": false,
        "items": [
            {
                "name": "Beer",
                "img": "https://image.ibb.co/b0a4UU/Beer.png",
                "category": "Low-Proof Liquids",
                "available": false,
                "mixed_items": {
                    "Sprite": "Shandy",
                    "Champagne": "Black Velvet"
                }
            },
            {
                "name": "Wine",
                "img": "https://image.ibb.co/ebS7ip/Wine.png",
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
                "img": "https://image.ibb.co/fYVGb9/Champagne.png",
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
                "img": "https://image.ibb.co/jicUw9/Dry-Vermouth.png",
                "category": "Low-Proof Liquids",
                "available": false,
                "mixed_items": {
                    "Gin": "Martini"
                }
            },
            {
                "name": "Sweet Vermouth",
                "img": "https://image.ibb.co/gqsjUU/Sweet-Vermouth.png",
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
        "img": "https://image.ibb.co/k5VtOp/Liqueurs.png",
        "available": false,
        "items": [
            {
                "name": "Liqueur Coffee",
                "img": "https://image.ibb.co/gqYPUU/Liqueur-Coffee.png",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Vodka": "Black Russian"
                }
            },
            {
                "name": "Peach Liqueur",
                "img": "https://image.ibb.co/deCwb9/Peach-Liqueur.png",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Champagne": "Bellini"
                }
            },
            {
                "name": "Crème de cassis",
                "img": "https://image.ibb.co/fDRYOp/Cr-me-De-Cassis.png",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Champagne": "Kir Royale"
                }
            },
            {
                "name": "Campari",
                "img": "https://image.ibb.co/kfenip/Campari.png",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Sweet Martini": "Negroni",
                    "Orange Juice": "Garibaldi"
                }
            },
            {
                "name": "Aperol",
                "img": "https://image.ibb.co/fOh7ip/Aperol.png",
                "category": "Liqueurs",
                "available": false,
                "mixed_items": {
                    "Spritz": "Aperol Spritz",
                    "Champagne": "Aperol Spritz"
                }
            },
            {
                "name": "Triple Sec",
                "img": "https://image.ibb.co/hROPUU/Triple-Sec.png",
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
        "img": "https://image.ibb.co/i4R03p/Rum-Cocktails.png",
        "available": false,
        "items": [
            {
                "name": "Mojito",
                "img": "https://image.ibb.co/iOhuUU/Mojito.png",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Hemingway",
                "img": "https://image.ibb.co/jSRA3p/Hemingway.png",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Dark and Stormy",
                "img": "https://image.ibb.co/g4jxip/Dark-And-Stormy.png",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Daiquiri",
                "img": "https://image.ibb.co/iiGA3p/Daiquiri.png",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {
                    "Grapefruit Juice": "Hemingway"
                }
            },
            {
                "name": "Old Fashioned",
                "img": "https://image.ibb.co/ig6XG9/Old-Fashioned.png",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Cuba Libre",
                "img": "https://image.ibb.co/jZEpUU/Cuba-Libre.png",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Piña Colada",
                "img": "https://image.ibb.co/e7NTpU/Pi-a-Colada.png",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {
                    "Grenadine": "Bahama Mama"
                }
            },
            {
                "name": "Bahama Mama",
                "img": "https://image.ibb.co/kHWopU/Bahama-Mama.png",
                "category": "Rum Cocktails",
                "available": false,
                "mixed_items": {}
            }
        ]
    },
    {
        "name": "Tequila Cocktails",
        "img": "https://image.ibb.co/f8j9w9/Tequila-Cocktails.png",
        "available": false,
        "items": [
            {
                "name": "Tequila Sunrise",
                "img": "https://image.ibb.co/kDBXG9/Tequila-Sunrise.png",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Margarita",
                "img": "https://image.ibb.co/gXMXG9/Margarita.png",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Paloma",
                "img": "https://image.ibb.co/kXd19U/Paloma.png",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Tequila Sour",
                "img": "https://image.ibb.co/nF6M9U/Tequila-Sour.png",
                "category": "Tequila Cocktails",
                "available": false,
                "mixed_items": {
                    "Triple Sec": "Margarita"
                }
            },
            {
                "name": "Tequila Screwdriver",
                "img": "https://image.ibb.co/ePeKw9/Tequila-Screwdriver.png",
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
        "img": "https://image.ibb.co/cTwB9U/Gin-Cocktails.png",
        "available": false,
        "items": [
            {
                "name": "Pegu Club",
                "img": "https://image.ibb.co/fG3q3p/PeguClub.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Red Snapper",
                "img": "https://image.ibb.co/c5gM9U/Red-Snapper.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Tom Collins",
                "img": "https://image.ibb.co/gWyCG9/Tom-Collins.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Bronx",
                "img": "https://image.ibb.co/hdbM9U/Bronx.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Gin and Tonic",
                "img": "https://image.ibb.co/gaBzw9/Gin-And-Tonic.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Martini",
                "img": "https://image.ibb.co/ezoZUU/Martini.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Americano",
                "img": "https://image.ibb.co/gQGcip/Americano.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "South Side",
                "img": "https://image.ibb.co/nwpxip/Southside.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {
                    "Soda": "Tom Collins"
                }
            },
            {
                "name": "Sweet Martini",
                "img": "https://image.ibb.co/jcWopU/Sweet-Martini.png",
                "category": "Gin Cocktails",
                "available": false,
                "mixed_items": {
                    "Campari": "Negroni",
                    "Orange Juice": "Bronx"
                }
            },
            {
                "name": "Negroni",
                "img": "https://image.ibb.co/du0g9U/Negroni.png",
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
        "img": "https://image.ibb.co/b9Kbb9/Vodka-Cocktails.png",
        "available": false,
        "items": [
            {
                "name": "White Russian",
                "img": "https://image.ibb.co/mzoew9/White-Russian.png",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Bloody Mary",
                "img": "https://image.ibb.co/iXZV3p/Bloody-Mary.png",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Screwdriver",
                "img": "https://image.ibb.co/jwxHip/Screwdriver.png",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Moscow Mule",
                "img": "https://image.ibb.co/bSoCG9/Moscow-Mule.png",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Cosmopolitan",
                "img": "https://image.ibb.co/ehkRb9/Cosmopolitan.png",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Vodka Cranberry",
                "img": "https://image.ibb.co/dppV3p/Vodka-Cranberry.png",
                "category": "Vodka Cocktails",
                "available": false,
                "mixed_items": {
                    "Triple Sec": "Cosmopolitan"
                }
            },
            {
                "name": "Black Russian",
                "img": "https://image.ibb.co/eXq3Op/Black-Russian.png",
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
        "img": "https://image.ibb.co/j9FtOp/Wine-Cocktails.png",
        "available": false,
        "items": [
            {
                "name": "Aperol Spritz",
                "img": "https://image.ibb.co/dS1A3p/Aperol-Spritz.png",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Spritz",
                "img": "https://image.ibb.co/iDpKw9/Spritz.png",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Tinto De Verano",
                "img": "https://image.ibb.co/ckhHip/Tinto-De-Verano.png",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Kir Royale",
                "img": "https://image.ibb.co/fy9mb9/Kir-Royale.png",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Mimosa",
                "img": "https://image.ibb.co/buPmb9/Mimosa.png",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Bellini",
                "img": "https://image.ibb.co/iNYew9/Bellini.png",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Black Velvet",
                "img": "https://image.ibb.co/hjniOp/Black-Velvet.png",
                "category": "Wine Cocktails",
                "available": false,
                "mixed_items": {}
            }
        ]
    },
    {
        "name": "Whiskey Cocktails",
        "img": "https://image.ibb.co/daxUw9/Whiskey-Cocktails.png",
        "available": false,
        "items": [
            {
                "name": "Whiskey Coke",
                "img": "https://image.ibb.co/mwhTpU/Whiskey-Coke.png",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Whiskey Soda",
                "img": "https://image.ibb.co/ek98pU/Whiskey-Soda.png",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Manhattan",
                "img": "https://image.ibb.co/kFMA3p/Manhattan.png",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Rob Roy",
                "img": "https://image.ibb.co/c6Exip/RobRoy.png",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "New York Sour",
                "img": "https://image.ibb.co/d2Uxip/New-York-Sour.png",
                "category": "Whiskey Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Whiskey Sour",
                "img": "https://image.ibb.co/f353Op/Whiskey-Sour.png",
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
        "img": "https://image.ibb.co/eLp9w9/No-Spirit-Cocktails.png",
        "available": false,
        "items": [
            {
                "name": "Shirley Temple",
                "img": "https://image.ibb.co/bNF3Op/Shirley-Temple.png",
                "category": "No Spirit Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Garibaldi",
                "img": "https://image.ibb.co/cremb9/Garibaldi.png",
                "category": "No Spirit Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Shandy",
                "img": "https://image.ibb.co/dHDCG9/Shandy.png",
                "category": "No Spirit Cocktails",
                "available": false,
                "mixed_items": {}
            },
            {
                "name": "Coco Colada",
                "img": "https://image.ibb.co/kVrXG9/Coco-Colada.png",
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
