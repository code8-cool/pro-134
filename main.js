leftWx = 0;
rightWx = 0;
difference = 0;




function setup ()
{
     video = createCapture(VIDEO);
     video.size(550,500);
      
     canvas = createCanvas(500,500);
     canvas.position(560,150);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose',gotPoses);
    }

    function draw()
    {
        background('#000000')
        textSize(difference)
        fill("#FFFFED")
        text("Joel", difference, difference)
    }

    function modelLoaded() {
        console.log('PoseNet Is Initialized!');
    }
 
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);

        leftWx = results[0].pose.leftWrist.x;
        rightWx = results[0].pose.rightWrist.x;
        
        difference = floor(leftWx - rightWx);
        console.log("leftWx = " + leftWx + "rightWx = " + rightWx + "difference " + difference);
    
        }
    }