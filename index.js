function dwarfRollCall(dwarves) {
  var num = "";
  for(let i = 0;i<dwarves.length;i++){
  num += `${i+1}. ${dwarves[i]} `
    }
  return num
}


function summonCaptainPlanet(planeteerCalls){
  var upper = [];
  for(let i = 0;i < planeteerCalls.length;i++){
  upper.push(`${planeteerCalls[i].toUpperCase()}!`)
    }
    return upper;
}

function longPlaneteerCalls(words) {
 var found = words.find(function(element){
 return element.length > 4
    } )
    if (found) {
      return true
    
    } else { return false
    }
    
}

function findTheCheese (foods) {
 var cheese = ["cheddar","gouda","camembert"]
 var foundcheese = foods.find(function(element){
    return cheese.includes(element)
  })
  if(foundcheese){
    return foundcheese
  }else {return "no cheese!";}
  
  }

