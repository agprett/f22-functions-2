//forEach
function forEach(fn) {
  let initialArray = []
  
  for(let i = 0; i < initialArray.length; i++){
    fn(initialArray[i], i, initialArray)
  }
}

//map
function map(fn) {
  let initialArray = []
  
  let returnArray = []
  for(let i = 0; i < initialArray.length; i++){
    returnArray.push(fn(initialArray[i], i, initialArray))//needs to return a value
  }
  
  return returnArray
}

//filter
function filter(fn) {
  let initialArray = []

  let returnArray = []
  for(let i = 0; i < initialArray.length; i++){
    if(fn(initialArray[i], i, initialArray)){//needs to return true or false
      returnArray.push(initialArray[i])
    }
  }

  return returnArray
}

//reduce
function reduce(fn, startValue) {
  let initialArray = []

  let returnValue = (startValue || initialArray[0])//this is the accumulator/acc
  for(let i = 0; i < initialArray.length; i++){
    returnValue = fn(returnValue, initialArray[i], i, initialArray)//must return value
  }

  return returnValue
}