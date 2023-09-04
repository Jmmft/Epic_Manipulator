noseX=0;
noseY=0;
difference=0;
RightWristX=0;
LeftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background('#6e8bf5');
    document.getElementById("text_size").innerHTML="The Epic Change of size of the text will be " +difference+"px";
    fill('#c20899');
    stroke('#ed0c0c');
    textSize(difference);
    text("Epic",noseX,noseY);

}
function modelLoaded(){
    console.log('Work is thy PoseNet');
}

function gotPoses(results)
{
    if(results.length>0)
    {
     console.log(results);
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;
     console.log("noseX="+noseX+",noseY="+noseY);
     LeftWristX=results[0].pose.leftWrist.x;
     RightWristX=results[0].pose.rightWrist.x;
     difference=floor(LeftWristX-RightWristX);

     console.log("LeftWristX="+LeftWristX+", RightWristX="+RightWristX+", difference="+difference);
    }
    
}