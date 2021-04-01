/**
 * @param {string[]} words
 * @return {string}
 * https://leetcode.com/problems/alien-dictionary/
 * 
 */
var alienOrder = function(words) {
    
    let count = new Map();
    let adjList = new Map();
    
    for (const word of words) {
        for (let i = 0; i < word.length; i++) {
            let char = word.charAt(i);
            count.set(char, 0);
            adjList.set(char, new Array());
        }
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];

        if (word1.length > word2.length && word1.startsWith(word2)) {
           
            return "";
        }
        
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            let word1Char = word1.charAt(j);
            let word2Char = word2.charAt(j);
            
            if (word1Char !== word2Char) {
                count.set(word2Char, count.get(word2Char) + 1);
                adjList.get(word1Char).push(word2Char);
                break;
            }
        }
    }
    
    
    let queue = new Array();
    let sb = new Array(); // string builder
    
    for (const [char, cnt] of count.entries()) {
        if (cnt === 0) {
            queue.push(char);   
        }
    }
    
    while (queue.length) {
        let char = queue.shift();
        sb.push(char);
        
        let adj = adjList.get(char);
        
        for (const v of adj) {
            count.set(v, count.get(v) - 1);
            if (count.get(v) === 0) {
                queue.push(v);   
            }
        }
    }
    
    if (sb.length < count.size) return "";
    
    return sb.join('');
    
};

/**

Complexity Analysis

Let NN be the total number of strings in the input list.

Let CC be the total length of all the words in the input list, added together.

Let UU be the total number of unique letters in the alien alphabet. While this is limited to 2626 in the question description, we'll still look at how it would impact the complexity if it was not limited (as this could potentially be a follow-up question).

Time complexity : O(C)O(C).

There were three parts to the algorithm; identifying all the relations, putting them into an adjacency list, and then converting it into a valid alphabet ordering.

In the worst case, the first and second parts require checking every letter of every word (if the difference between two words was always in the last letter). This is O(C)O(C).

For the third part, recall that a breadth-first search has a cost of O(V + E)O(V+E), where VV is the number of vertices and EE is the number of edges. Our algorithm has the same cost as BFS, as it too is visiting each edge and node once (a node is visited once all of its edges are visited, unlike the traditional BFS where it is visited once one edge is visited). Therefore, determining the cost of our algorithm requires determining how many nodes and edges there are in the graph.

Nodes: We know that there is one vertex for each unique letter, i.e. O(U)O(U) vertices.

Edges: Each edge in the graph was generated from comparing two adjacent words in the input list. There are N - 1N−1 pairs of adjacent words, and only one edge can be generated from each pair. This might initially seem a bit surprising, so let's quickly look at an example. We'll use English words.

abacus
algorithm
The only conclusion we can draw is that b is before l. This is the reason abacus appears before algorithm in an English dictionary. The characters afterward are irrelevant. It is the same for the "alien" alphabets we're working with here. The only rule we can draw is the one based on the first difference between the two words.

Also, remember that we are only generating rules for adjacent words. We are not adding the "implied" rules to the adjacency list. For example, assume we have the following word list.

rgh
xcd
tny
bcd
We are only generating the following 3 edges.

r -> x
x -> t
t -> b
We are not generating these implied rules (the graph structure shows them indirectly).

r -> t
r -> b
x -> b
So with this, we know that there are at most N - 1 edges.

There is an additional upper limit on the number of edges too—it is impossible for there to be more than one edge between each pair of nodes. With UU nodes, this means there can't be more than U^2U 
2
  edges.

It's not common in complexity analysis that we get two separate upper bounds like this. Because the number of edges has to be lower than both N - 1N−1 and U^2U 
2
 , we know it is at most the smallest of these two values. Mathematically, we can say this is \min(U^2, N - 1)min(U 
2
 ,N−1).

Going all the way back to the cost of breadth first search, we can now substiute in the number of nodes and the number of edges: V = UV=U and E = \min(U^2, N - 1)E=min(U 
2
 ,N−1). This gives us:

O(V + E) = O(U + \min(U^2, N - 1)) = O(U + \min(U^2, N))O(V+E)=O(U+min(U 
2
 ,N−1))=O(U+min(U 
2
 ,N)).

Finally, we need to combine the two parts: O(C)O(C) for the first and second parts, and O(U + \min(U^2, N))O(U+min(U 
2
 ,N)) for the third part. When we have two independent parts, we add the costs together, as we don't necessarily know which is larger. After we've done this, we should look at the final formula and see whether or not we can actually draw any conclusions about which is larger. Adding them together, we initially get the following:

O(C) + O(U + \min(U^2, N)) = O(C + U + \min(U^2, N))O(C)+O(U+min(U 
2
 ,N))=O(C+U+min(U 
2
 ,N)).

So, what do we know about the relative values of NN, CC, and UU? Well, we know that N < CN<C, as each word contains at least one character (remember, CC is total characters across the words, not unique characters). Additionally, U < CU<C because there can't be more unique characters than there are characters.

In summary, CC is the biggest of the three, and NN and UU are smaller, although we don't know which is smaller out of those two.

So for starters, we know that the UU bit is insignificant compared to the CC. Therefore, we can just remove it:

O(C + U + \min(U^2, N)) → O(C + \min(U^2, N))O(C+U+min(U 
2
 ,N))→O(C+min(U 
2
 ,N))

Now, to simplify the rest, consider two cases:

If U^2U 
2
  is smaller than NN, then \min(U^2, N) = U^2min(U 
2
 ,N)=U 
2
 . By definition, we've just said that U^2U 
2
  is smaller than NN, which is in turn smaller than CC, and so U^2U 
2
  is definitely less than CC. This leaves us with O(C)O(C).

If U^2U 
2
  is larger than NN, then \min(U^2, N) = Nmin(U 
2
 ,N)=N. Because C > NC>N, we're left with O(C)O(C).


So in all cases, we know that C > \min(U^2, N)C>min(U 
2
 ,N). This gives us a final time complexity of O(C)O(C).

Space complexity : O(1)O(1) or O(U + \min(U^2, N))O(U+min(U 
2
 ,N)).

The adjacency list uses the most auxiliary memory. This list uses O(V + E)O(V+E) memory, where VV is the number of unique letters, and EE is the number of relations.

The number of vertices is simply UU; the number of unique letters.

The number of edges in the worst case is \min(U^2, N)min(U 
2
 ,N), as explained in the time complexity analysis.

So in total the adjacency list takes O(U + \min(U^2, N))O(U+min(U 
2
 ,N)) space.

So for the question we're given, where UU is a constant fixed at a maximum of 2626, the space complexity is simply O(1)O(1). This is because UU is fixed at 2626, and the number of relations is fixed at 26^226 
2
 , so O(\min(26^2, N)) = O(26^2) = O(1)O(min(26 
2
 ,N))=O(26 
2
 )=O(1).

But when we consider an arbitrarily large number of possible letters, we use the size of the adjacency list; O(U + \min(U^2, N))O(U+min(U 
2
 ,N)).



**/
