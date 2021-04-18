// Add your functions here
function map(arr, fn) {
  const result = []
  arr.forEach(el => {
    result.push(fn(el))
  })
  return result
}

function reduce(arr, fn, startingPoint) {
  let result = !!startingPoint ? startingPoint : arr[0]
  let i = !!startingPoint ? 0 : 1
  for(; i < arr.length; i++) {
    result = fn(arr[i], result)
  }
  return result
}

console.log("Test 1")
sourceArray = [1,2,3]
console.log(reduce(sourceArray, function(e, memo){return e + memo}))

console.log("Test 2")
sourceArray = [1,2,3]
startingPoint = 100
console.log(reduce(sourceArray, function(e, memo){return e + memo}, startingPoint))

console.log("Test 3")
sourceArray = [1, 2, true, "razmatazz"]
console.log(reduce(sourceArray, function(a, memo){ return !!a && !!memo}))
console.log("Test 3-1")
sourceArray = [0, 1, 2, true, "razmatazz"]
console.log(reduce(sourceArray, function(a, memo){ return !!a && !!memo}))

console.log("Test 4")
sourceArray = [1, 2, true, "razmatazz", false]
console.log(reduce(sourceArray, function(a, memo){ return !!a && !!memo}))
console.log("Test 4-1")
sourceArray = [1, 2, true, "razmatazz"]
console.log(reduce(sourceArray, function(a, memo){ return !!a && !!memo}))
console.log("Test 4-2")
sourceArray = [false, 1, 2, true, "razmatazz"]
console.log(reduce(sourceArray, function(a, memo){ return !!a && !!memo}))

console.log("Test 5")
sourceArray = [ false, null, null, null, true]
console.log(reduce(sourceArray, function(a, memo){ return !!a || !!memo }))
console.log("Test 5-1")
sourceArray = [ false, null, null, null]
console.log(reduce(sourceArray, function(a, memo){ return !!a || !!memo }))
console.log("Test 5-2")
sourceArray = [ 1, false, null, null, null]
console.log(reduce(sourceArray, function(a, memo){ return !!a || !!memo }))

console.log("Test 6")
sourceArray = [ false, null, null, null]
console.log(reduce(sourceArray, function(a, memo){return !!a || !!memo}))
console.log("Test 6-1")
sourceArray = [ false, null, true, null, null]
console.log(reduce(sourceArray, function(a, memo){return !!a || !!memo}))
console.log("Test 6-2")
sourceArray = [ false, null, true, null, null, true]
console.log(reduce(sourceArray, function(a, memo){return !!a || !!memo}))

function sayHello(name="") {
  console.log(`Hello${name}`)
  return(`Hello${name}`)
}

let sayHola = function(name="") {
  console.log(`Hola${name}`)
  return(`Hola${name}`)
}

function functionUsingCallback(en, es, zh, name){
  const display = document.querySelector("#display")
  display.innerHTML = `${en(name)} // ${es(name)} // ${zh(name)}`
}

functionUsingCallback(sayHello, sayHola, function(name="") {
  console.log(`Ni Hao${name}`)
  return(`Ni Hao${name}`)
}, " Gary")
