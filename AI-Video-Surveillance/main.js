objects = [];
status ="";
video ="";

function preload()
{
    video = createVideo('video.mp4');
    
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function draw() 
{
    image (video,0,0,480,380);
    if(status !="")
    {
        objectDetector.detect(video,gotResult);
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML="status : Objects Detected";
            document.getElementById("number_ofobjects").innerHTML = "number of object detected are : "+objects.length;

            Fill("#FF0000")
            percent =floor(objects[i].confidence *100);
            text(objects[i].label +""+percent+ "%",objects[i].x +15, objects[i].y +15);
            nofill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById(status).innerHTML = "status : Detecting objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, resluts)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(video, 0, 0, 380, 380);
    if(status !="")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.lenth; i++) {
            Document.getElementById("status").innerHTML = "status : Object "
        }
    }
}