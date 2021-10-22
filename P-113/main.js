function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw()
{
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  circle(20, 20, 50);
  circle(610, 20, 50);
  circle(20, 610, 50);
}

function take_snapshot()
{
    save('Your_tint_photo.png');
}
 function filter_tint()
 {
     tint_color = document.getElementById("Color_name").value;
 }