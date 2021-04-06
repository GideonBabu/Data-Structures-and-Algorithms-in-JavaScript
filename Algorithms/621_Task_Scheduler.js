/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * time O(N) where n is the total number of tasks
 * space O(1)
 */
var leastInterval = function(tasks, n) {
    let freq = new Array(26).fill(0);    
    
    for (const task of tasks) {        
        freq[task.charCodeAt() - 'A'.charCodeAt()]++;
    }
    
    // sort the frequencies
    freq.sort((a, b) => a - b);    
    
    let max_f = freq[25];
    let idle_time = (max_f - 1) * n;
    
    for (let i = freq.length - 2; i >= 0 && idle_time > 0; i--) {
        idle_time -= Math.min((max_f - 1), freq[i]);   
    }
    
    idle_time = Math.max(0, idle_time);
    
    return tasks.length + idle_time;
};
