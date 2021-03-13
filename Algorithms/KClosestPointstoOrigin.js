/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 * time complexity: O(N) in average case and O(N^2) in the worst case. Where N is the length of points 
 * Space compelxity: O(1) 
 */
var kClosest = function(points, k) {    
    let left = 0;
    let right = points.length - 1;
    
    while (left <= right) {
        const pivot = findPivot(left, right);
        
        if (pivot === k) {
            break;
        } 
        
        if (pivot < k) {
            left = pivot + 1;   
        } else {
            right = pivot - 1;   
        }        
            
    }
        
    return points.slice(0, k);
    
    function findPivot(left, right) {
        const pivot = points[left];        
        
        while (left < right) {
            while (left < right && compare(points[right], pivot) >= 0) {
                right--;       
            }
            
            points[left] = points[right];
                
            while (left < right && compare(points[left], pivot) <= 0) {
                left++;       
            }
            points[right] = points[left]
        }
        points[left] = pivot;
        
        return left;
    }

    function swap(left, right) {    
        [points[left], points[right]] = [points[right], points[left]]; 
        
    }

    function compare(x, y) {
        return x[0] * x[0] + x[1] * x[1] - (y[0] * y[0] + y[1] * y[1]);        
    }
    
};

