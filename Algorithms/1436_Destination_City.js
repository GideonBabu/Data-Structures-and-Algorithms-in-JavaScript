/**
 * @param {string[][]} paths
 * @return {string}
 * time O(n) where n is paths.length
 * space O(n) for destMap to store the paths in map
 */
var destCity = function(paths) {
    
    let destMap = new Map();
    
    for (let path of paths) {
        let [source, dest] = path;
        
        if (destMap.has(source)) {
            destMap.get(source).add(dest);
        } else {
            destMap.set(source, new Set([source]));
        }
        
        if (!destMap.has(dest)) {
            destMap.set(dest, new Set());
        }
    }
    
    for (let city of destMap.keys()) {
        if (destMap.get(city).size === 0) return city;
    }    
};

const paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];

console.log(destCity(paths));
