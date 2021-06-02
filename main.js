nose_x=0;
nose_y=0;
function preload(){
    img=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
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
function takesnapshot(){
save("myfilter.png");
}
function modelloaded(){
    console.log("posenet is loaded");
}
function getposes(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x="+nose_x);
        console.log("nose y="+nose_y);
    }
}
function draw(){
    image(video,0,0,400,400);
    /*
    fill("red");
    stroke("yellow");
    circle(nose_x,nose_y,20);
    */
   image(img,nose_x-20,nose_y-10,30,30);
}
