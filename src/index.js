
exports.min = function min (array) {
     
  let minResult = 0;

  if(!Array.isArray(array) || array[0] === undefined) {   // check array is array or array is empty
     return 0;
  } 
    for (let currMinVal of array) {
      if(minResult > currMinVal){
        minResult = currMinVal;
      }
    }
  return minResult;
}

exports.max = function max (array) {
let maxResult = 0;

  if(!Array.isArray(array) || array[0] === undefined) {    
    return 0;
  }
    for(let currMaxVal of array){
      if(maxResult < currMaxVal){
        maxResult = currMaxVal;
      }
    }
  return maxResult;
}

exports.avg = function avg (array) {
let avgResult = 0;

  if(!Array.isArray(array) || array[0] === undefined){
    return 0;
  } 
    for(let currVal of array){
      avgResult += currVal;
    }
  return avgResult/array.length;
}


