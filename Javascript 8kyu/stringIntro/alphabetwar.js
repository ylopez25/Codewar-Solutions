function alphabetWar(fight){
    let arr = fight.toLowerCase().split('');
    let left = {
        "w" : 4,
        "p " :3,
        "b" : 2,
        "s " : 1
    }
    let right = {
        'm' : 4,
        'q' : 3,
        'd' : 2,
       ' z' : 1
    }

    let lefttotal = 0;
    let righttotal = 0;

   for (let i =0; i < arr.length; i++) {
  if(left.hasOwnProperty(arr[i])) {
      lefttotal += left[arr[i]];
      console.log(lefttotal)
  }else if (right.hasOwnProperty(arr[i])) {
      righttotal += right[arr[i]];
      console.log(righttotal)
  }

}


if (lefttotal > righttotal) {
    return "Left fight again"
}else if (righttotal > lefttotal) {
    return 'Right side wins!'
}else if (righttotal === lefttotal) {
    return "Left side wins!"
}
}

console.log( alphabetWar("z")) // , "Right side wins!" );
console.log( alphabetWar("zdqmwpbs")) // , "Let's fight again!" );
console.log( alphabetWar("zzzzs")) //, "Right side wins!" );
console.log( alphabetWar("wwwwww")) //, "Left side wins!" );

/**
 * Pseudo code
 * create an object of left and right
 * loop through the str 
 * check if the value is in either obj and return the value
 * add the values
 * compare the values and if left is greater than right ...
 * 
 * 
 * create a for loop and push the value of each key in the obj
 * reutnr max num
 */