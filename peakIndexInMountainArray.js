var peakIndexInMountainArray = function(arr) {

    for(let i=1; i<arr.length-1; i++){
       if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) return i
    }

};

console.log(peakIndexInMountainArray([0,1,0]))
