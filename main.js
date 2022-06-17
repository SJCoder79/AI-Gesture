nosex=0;
nosey=0;
difference=0;
leftwristx=0;
rightwristx=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=resluts[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}
function draw(){
    background('#808080');
    document.getElementById("square_sides").innerHTML="width and height of the square will be ="+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    square(nosex,nosey,difference);
}