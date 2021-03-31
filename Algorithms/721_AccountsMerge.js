//Time Complexity: O(sum of Ai * log Ai) where Ai is the length of the account at accounts[i]
//Space complexity: O(sum of Ai) space used for graph and search
var accountsMerge = function(accounts) {
    let graph = new Map();
    let emailMap = new Map();
    
    for (const acc of accounts) {
        let name = acc[0];
        
        for (let i = 1; i < acc.length; i++) {
            let email = acc[i];
            
            if (!graph.has(email)) {
                graph.set(email, new Set());   
            }
            emailMap.set(email, name);
            
            if (i === 1) continue;
            
            graph.get(email).add(acc[i - 1]);
            graph.get(acc[i - 1]).add(email);
            
            
        }
    }
    
    
    let merged = new Array();
    let visited = new Set();
    
    const dfs = function(email, list) {
        list.push(email);
        for (const next of graph.get(email).keys()) {
            if (!visited.has(next)) {
                visited.add(next);
                dfs(next, list);
            }
        }
    }
    
    for (const [email, name] of emailMap.entries()) {
        let emailList = new Array();
        
        if (!visited.has(email)) {
            visited.add(email);
            dfs(email, emailList);
            emailList.sort();
            emailList.unshift(name);
            merged.push(emailList);
        }
    }
    
    return merged;
    
};
