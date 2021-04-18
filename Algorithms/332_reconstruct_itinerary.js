
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let flightMap = new Map();

    for (let ticket of tickets) {
        let [source, dest] = ticket;

        if (!flightMap.has(source)) {
            flightMap.set(source, []);
        }
        flightMap.get(source).push(dest);
    }

    for (let dests of flightMap.values()) {
        // sort in reverse order
        dests.sort((a, b) => {
            if (a < b) return 1;
            if (a > b) return -1;
            return 0;
        });
    }
    
    let itinerary = [];
    DFS('JFK')

    function DFS(source) {
        let destList = flightMap.get(source);     
        while (destList && destList.length) {
            let nextDest = destList.pop();
            DFS(nextDest);
        }
        itinerary.push(source);
    }

    return itinerary.reverse();
};
