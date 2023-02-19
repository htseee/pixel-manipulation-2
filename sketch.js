let video;
let videoPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/media/UFO.mp4';

function preload(){
  video = createVideo(videoPath);
}

function setup() {
  //Set pixel density to 1
  pixelDensity(1);
  createCanvas(480, 270);
  //Creates a background with a play symbol
  background(0);
  triangle(215, 110, 275, 140, 215, 170);
  //Hides the original HTML video element
  video.hide();
}

function draw() {
  //Load video pixels
  video.loadPixels();
  //Iterate through all pixels in the video
  let stepSize = 1;
  for (let y = 0; y < video.height; y += stepSize){
    for (let x = 0; x < video.width; x += stepSize){
      //TODO: Manipulate pixels array
        let indexOfRed = (x + y * video.width) * 4;
        //video.pixel[indexOfRed]; //red
        video.pixels[indexOfRed + 1] = random(100); //green
        //video.pixel[indexOfRed + 2]; //blue
        //video.pixel[indexOfRed + 3]; //alpha
    }
  }
  //TODO: Update the pixels in the video
  video.updatePixels();
  //Draw the video to the canvas
  image(video, 0, 0, 480, 270);
}

