//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let circleSize = 60;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(252, 239, 227);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);
  circle(150, 150, circleSize);
  noFill();
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
}
