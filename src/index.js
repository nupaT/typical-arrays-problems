
exports.min = function min (arrayMin) {
  let currMinVal = 0;      
  let minResult = 0;

  if(arrayMin === 0 || arrayMin === undefined) {
    minResult = 0;
  } else {
    for (let currMinVal of arrayMin ) {
      if(minResult > currMinVal){
        minResult = currMinVal;
      }
    }
  }

  return minResult;
}

exports.max = function max (arrayMax) {
let currMaxVal = 0;
let maxResult = 0;

  if(arrayMax === 0 || arrayMax === undefined) {
    maxResult = 0;
  } else {
  for(let currMaxVal of arrayMax){
    if(maxResult < currMaxVal){
      maxResult = currMaxVal;
    }
  }

  return maxResult;
}

exports.avg = function avg (array) {
  return 0;
}


