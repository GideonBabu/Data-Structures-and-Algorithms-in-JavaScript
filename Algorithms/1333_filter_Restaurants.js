/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 * time: N(log N) where N is the number of restaurants
 * space: O(N) to store the filtered restaurants
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    let filter = [];
    
    for (let res of restaurants) {
        let [id, rating, vegetarian, price, distance] = res;
        
        if (veganFriendly === 1 && vegetarian === 0) continue;
        
        if (price > maxPrice) continue;
        
        if (distance > maxDistance) continue;
        
        filter.push([id, rating]);
    }
    
    filter.sort((resA, resB) => {
        if (resA[1] === resB[1]) {
            return resB[0] - resA[0];
        }
        return resB[1] - resA[1];
    });
    
    return filter.map(res => res[0]);
};
