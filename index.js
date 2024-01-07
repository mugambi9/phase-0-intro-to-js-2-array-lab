
let cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  function appendCat(name) {
    // Return a new array with the cat appended
    return [...cats, name];
  }
  
  function prependCat(name) {
    
    return [name, ...cats];
  }
  
  function removeLastCat() {
    // Return a new array with the last cat removed
    return cats.slice(0, -1);
  }
  
  function removeFirstCat() {
    // Return a new array with the first cat removed
    return cats.slice(1);
  }
  
  





