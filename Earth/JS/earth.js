import { currencys } from '../../General/currencys.js';

let dollars = currencys.dollars

console.log(dollars)
let ownedStores = {};

function buyStore(store, startingReward, startingPriceToUpgrade, timeToGetReward, raisePriceBy){
    ownedStores[store] = {
        reward: startingReward,
        priceToUpgrade: startingPriceToUpgrade,
        timeToGetReward: timeToGetReward,
        raisePriceBy: raisePriceBy,
        level: 1
    };

    document.querySelector(`#buy ${store}`).remove();
    document.querySelector(`#thingsOf ${store}`).style.display = 'block';
}
 
function upgradeStore(store){
    if (dollars >= ownedStores[store].priceToUpgrade){
        dollars -= ownedStores[store].priceToUpgrade;
        ownedStores[store].priceToUpgrade += ownedStores[store].raisePriceBy;
        ownedStores[store].level++;

        document.getElementById('upgrade' + store).textContent = ownedStores[store].priceToUpgrade;
    }
    else {
        alert(`Not enough money, you need ${ownedStores[store].priceToUpgrade - dollars} more to upgrade ${store}`);
    }
    
}

