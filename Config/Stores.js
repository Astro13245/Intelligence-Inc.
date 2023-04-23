function buyStore(ownedStores, store, startingReward, startingPriceToUpgrade, timeToGetReward, raisePriceBy){
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
 
function upgradeStore(store, currency){
    if (currency >= ownedStores[store].priceToUpgrade){
        currency -= ownedStores[store].priceToUpgrade;
        ownedStores[store].priceToUpgrade += ownedStores[store].raisePriceBy;
        ownedStores[store].level++;

        document.getElementById('upgrade' + store).textContent = ownedStores[store].priceToUpgrade;
    }
    else {
        alert(`Not enough money, you need ${ownedStores[store].priceToUpgrade - currency} more to upgrade ${store}`);
    }
    
}

