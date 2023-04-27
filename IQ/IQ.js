import * as Config from '../Config.';

let timesProfit = 1;

let IQRP = 0;

let IQ = 0;

let IQROwnedStores = {};

for (const storeName of Object.keys(earthStores)){
    const store = earthStores[storeName];
    document.getElementById(`buy${storeName}`).onclick = () => {
        Config.buyStore(earthOwnedStores, storeName, store.startingReward, store.startingPriceToUpgrade, store.timeToGetReward, store.raisePriceBy);
    }
}

const upgradeIQ = (upgradeID, addOnToIQ) => {
    document.getElementById(upgradeID).remove()

    IQ += addOnToIQ;
}

const x = () => {
    
}