// We want to create digital picture frames for our clients. Clients have different dimensions of things to frame, but all of them are rectangles. 

// Given the width and the height of an image, we want to return a frame for the image. 

// A basic frame is made up with '*' (asterisks) on the top and bottom and '|' (vertical lines) on the left and right sides. 

// An image that is 4x3 would need a frame like this: 

// ******

// Write a function to produce these digital frames. The function has two parameters, width and height.


//grab the length of the width and add two and repeat it with the same char (*)
//the next lines we want to replace the same length of the width with ('|') for the first and last index
//repeat that step the same number of times as the height
//add the first line to the end 

// "\n"
function pictureFrames(w, h) {
    if(w < 0 || h < 0) return null;
    let baseRow = "*".repeat(w + 2);
    let middleRow = "|" + " ".repeat(w) + "|\n";
    return baseRow + "\n" + middleRow.repeat(h) + baseRow;
  }
  