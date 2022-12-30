//Function to describe cats
let cats = ["Milo", "Otis", "Garfield"];


//appending a cat to the end of the array
 function destructivelyAppendCat(newCat1){
    return cats.push("Ralph");
 }

 // prepends a cat to the beginning of the cats array

function destructivelyPrependCat(Bob){
    return cats.unshift("Bob")
}
// removes the last cat from the cats array
function destructivelyRemoveLastCat(Garfield){
    return cats.pop("Garfield");
    }

//removes the first cat from cats array
function destructivelyRemoveFirstCat(Milo){
    return  cats.shift(Milo);
   }
//appends new cat to the cats array and returns a new array, leaving the cats array unchanged
  
function appendCat(Broom){
     return [...cats, "Broom"];
   
}

//prepends new cat to the cats array and returns a new array, leaving the cats array unchanged
  
function prependCat(Arnold){
      return ["Arnold",...cats];
   }
//removes last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat(){
       return cats.slice(0,-1);
     
   }
//removes first cat from the cats array and returns a new array, leaving the cats array unchanged

   function removeFirstCat(){
      return cats.slice(1);
    }
