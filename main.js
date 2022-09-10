function setup() {
  canvas = createCanvas(590, 500);
  canvas.position(600, 175);
  video = createCapture(VIDEO);
  video.size(590, 500)
  video.position(5, 150);

  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on('pose', gotPoses);

}

NX=0;
NY=0;
RX=0;
LX=0;
diff=0;

function modelLoaded() {
  console.log("model is loaded " + ml5.version);
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    NX = results[0].pose.nose.x;
    NY = results[0].pose.nose.y;

    RX = results[0].pose.rightWrist.x;
    LX = results[0].pose.leftWrist.x;

    diff = floor(LX - RX);
    console.log("nose x= " + NX + " nose y= " + NY + " right wrist x= " + RX + " left wrist x= " + LX);
    console.log("lenght of square =" + diff);

  }

}

function draw() {
  background("rgb(111, 111, 111)");
  document.getElementById("sl").innerHTML = "lenght of your piderman = " + diff + "px.";
  fill("red");
  textSize(diff);
  text('!!PETER!!',50,400);
 
}
