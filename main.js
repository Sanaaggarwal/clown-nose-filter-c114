function preload(){
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',getposes);
}
function draw(){
    image(video,0,0,400,400);
}
function takesnapshot(){
save("myfilter.png");
}
function modelloaded(){
    console.log("posenet is loaded");
}
function getposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}