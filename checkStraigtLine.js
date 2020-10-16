/* You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane. */

var checkStraightLine = function(coordinates) {
    let flag = true;

    var isCol = function(A, B, C){
       let  xDiff1 = B[0] - A[0]
       let  yDiff1 = B[1] - A[1]
       let  xDiff2 = C[0] - A[0]
       let  yDiff2 = C[1] - A[1]

       let prod1 = xDiff1 * yDiff2;
       let prod2 = xDiff2 * yDiff1;

        return prod1 === prod2

    }
    if(coordinates.length === 2) return true

    for(let i=2; i<coordinates.length ; i++){
       if(!isCol(coordinates[i], coordinates[i-1], coordinates[i-2]))
           return false;

    }


};

console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]))
