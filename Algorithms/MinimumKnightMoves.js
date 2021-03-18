/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {    
    let dir = [[-2, -1], [-2, +1], //up
               [-1, -2], [+1, -2], //left
               [+2, -1], [+2, +1], //down
               [-1, +2], [+1, +2]]; //right
    
    let queue = [[0, 0]];
    let level = 0, visited = new Set();
    while(queue.length != 0) {
        let next = [];
        while(queue.length != 0) {
            let cur = queue.pop();
            if (cur[0] == x && cur[1] == y) return level;
            for (let d of dir) {
                let nextX = cur[0]+d[0], nextY = cur[1]+d[1];
                if (!visited.has(nextX+","+nextY)) {
                    next.push([nextX, nextY]);
                    visited.add(nextX+","+nextY);
                }
            }
        };
        queue = next;
        level++;
    }    
};
