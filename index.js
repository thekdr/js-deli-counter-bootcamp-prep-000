var katzDeliLine = [];

function takeANumber (array, name) {
  array.push(name);
  return (`Welome, ${name}. You are number ${array.length} in line.`)
}

function nowServing (array) {
  if (array.length === 0) {
    return ("There is nobody waiting to be served.")
  } else {
  var serving = array.shift();
  return (`Currently serving ${serving}`);
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return ("The line is currently empty.")
  } else { 
    var line = "The line is currently ";
    for (var i = 0; i < array.length; i++) {
      line += `${array.length}. ${array[i]}, `
    }
    return (line)
  }  
}