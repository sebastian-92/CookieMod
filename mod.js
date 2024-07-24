if(BakingSoda === undefined) var BakingSoda = {};
if (typeof CCSE === 'undefined') {
            Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
        }

        BakingSoda.launch = function() {
            BakingSoda.name = "Baking Soda";
            BakingSoda.isLoaded = 1;
            console.log("working")
        };

        if (!BakingSoda.isLoaded) {
            if (CCSE && CCSE.isLoaded) {
                BakingSoda.launch();
            } else {
                if (!CCSE) var CCSE = {};
                if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
                CCSE.postLoadHooks.push(BakingSoda.launch);
            }
        }
