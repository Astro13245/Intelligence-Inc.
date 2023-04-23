import * as Config from '../../Config';

const earthStores = {
    'LemonadeStand': {
        startingReward: 1,
        startingPriceToUpgrade: 1,
        timeToGetReward: 5,
        raisePriceBy: 1
    }
}

console.log(dollars)
let earthOwnedStores = {};

for (const storeName of Object.keys(earthStores)){
    const store = earthStores[storeName];
    document.getElementById(`buy${storeName}`).onclick = () => {
        Config.buyStore(earthOwnedStores, storeName, store.startingReward, store.startingPriceToUpgrade, store.timeToGetReward, store.raisePriceBy);
    }
}