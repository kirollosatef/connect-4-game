const diameter = 50;
const xwidth = 600;
const yheight = 600;
const rows = 7;
const cols = 7;
const platformMargin = 1.7;

let piece = new Piece(xwidth / 2, yheight / 2, diameter, {
  r: 250,
  g: 10,
  b: 0,
});

let platform = new Platform(rows, cols, 0, 0, diameter, platformMargin, {
  r: 0,
  g: 0,
  b: 0,
});

function setup() {
  // put setup code here
  let canv = createCanvas(xwidth, yheight);
  canv.position((windowWidth - xwidth) / 2, (windowHeight - yheight) / 2);
  canv.style("border-radius", "10px");
}

function draw() {
  // put drawing code here
  background(0, 0, 139);
  platform.show();
  piece.show();
  movementOfPiece(piece);
}

let movementOfPiece = (p) => {
  p.x = mouseX;
  p.y = mouseY;
};

let putPiceOnPlatform = (piece, platform) => {
  platform.insert(piece);
};

function mouseClicked() {
  putPiceOnPlatform(piece, platform);
}
