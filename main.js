var song_1 = "";
var song_2 = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var scoreleftwrist = 0;


function preload() {
    song_1 = loadSound("Main Tera Boyfriend (Raabta) 64 Kbps.mp3");
    song_2 = loadSound("Teri Aankhon Mein - Darshan Raval.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("Score left wrist = " + scoreleftwrist)
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist Y = " + leftWristY + ", " + "Left Wrist X = " + leftWristX);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist Y = " + rightWristY + ", " + "Right Wrist X = " + rightWristX);
    }
}

function modelLoaded() {
    console.log("Posenet is initialized!");
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#ba0000");
    if (scoreleftwrist > 0.2) {
        if (song_1.isPlaying() == true) {
            console.log("Already Playing")
        } else {
            song_1.play();
            song_2.stop();
            song_1.setVolume(100000000000000000000000000);
            song_2.setVolume(0);
            circle(leftWristY, leftWristX, 20);
            document.getElementById("song_name").innerHTML = 'Song = Main tera boyfriend';
        }
    }
}
