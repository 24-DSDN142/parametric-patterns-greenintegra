//your parameter variables go here!

//Ignore these two, they just setup the canvas size. I needed them as variables for centreX and centreY to function.
let canvasWidth = 200;
let canvasHeight = 600;

let centreX = canvasWidth/2; // Where the centre of the canvas is horizontally
let centreY = canvasHeight; // Where the centre of the canvas is vertically
let triWidth = 75; // How wide the shapes will be
let triSpacing = 60; // The spacing between each repition of the shape
let reachDown = -20; // The scale at which the shape turns into an arrow (for the lower part)
let reachUp = 40; // The scale at which the shape turns into an arrow (for the upper part)
let repetitions = 6; // Number of arrows (Too high of a number may cause these to go off canvas. If this happens, increase canvasHeight.)

// The starting colour for the first arrow (The gradient is based off this)
let colorR = 5; 
let colorG = 5;
let colorB = 10;
let colorScale = 9;

// The colour for the diamond
let color1R = colorR*(.5*colorScale);
let color1G = colorG*(.5*colorScale);
let color1B = colorB*(.5*colorScale);

// The colour for the background
let color2R = 25;
let color2G = 25;
let color2B = 25;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = canvasWidth;
  pWallpaper.grid_settings.cell_height = canvasHeight;
  pWallpaper.grid_settings.row_offset  = canvasHeight/2;
}

function wallpaper_background() {
  background(color2R, color2G, color2B);
  fill(color1R, color1G, color1B); // Fills the diamond
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  beginShape();
  vertex(centreX-triWidth, centreY-(triSpacing*1+(triSpacing-reachDown))); // Left point
  vertex(centreX, centreY-(triSpacing*1-(triSpacing-reachDown*1))); // Lower centre point
  vertex(centreX+triWidth, centreY-(triSpacing*1+(triSpacing-reachDown))); // Right point
  vertex(centreX, centreY-(reachUp*1)-(triSpacing*1)); // Upper centre point
  endShape(CLOSE);

  for (let i = 1; i <= repetitions; i++) {
    beginShape();
    vertex(centreX-triWidth, centreY-(triSpacing*i+(triSpacing-reachDown))); // Left point
    vertex(centreX, centreY-(triSpacing*i-(triSpacing-reachDown*i))); // Lower centre point
    vertex(centreX+triWidth, centreY-(triSpacing*i+(triSpacing-reachDown))); // Right point
    vertex(centreX, centreY-(reachUp*i)-(triSpacing*i));; // Upper centre point
    endShape(CLOSE);
    fill(colorR*(i*colorScale), colorG*(i*colorScale), colorB*(i*colorScale)); // Colours arrows in a gradient
    if (i == repetitions) {
      noFill() // Removes fill from diamond when my_symbol runs a second time
    }
  }
}