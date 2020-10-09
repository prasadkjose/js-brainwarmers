 
/* A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz. */

var isToeplitzMatrix = function(matrix) {
    let i = 0; 
    let m = matrix.length;
    if(m === 0 || m === 1) return true
    
    let n = matrix[0].length ;
    if(m === 0 || n === 0 || n === 1) return true
    
    
    let flag = true;
    while( i<m-1 )
    {
        let j = 0;        
        while(j<n-1 )
        {
            if(matrix[i][j] !== matrix[i+1][j+1]){
                flag = false;
            }
            j++;
            
        }  
        i++;
    }
    return flag
};
console.log(isToeplitzMatrix([
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]));
