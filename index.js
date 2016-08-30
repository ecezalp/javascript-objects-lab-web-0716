var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value){
 var new_recipes = Object.assign({}, object)
 new_recipes[key] = value
 return new_recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var new_recipes = Object.assign({}, object)
  delete new_recipes[key]
  return new_recipes
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}