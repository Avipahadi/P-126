song_1 = "";
song_2 = "";

function preload() {
    song_1.loadSound("Main Tera Boyfriend (Raabta) 64 Kbps.mp3");
    song_2.loadSound("Teri Aankhon Mein - Darshan Raval.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}