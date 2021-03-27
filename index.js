console.log("spaceship homework");

const shipsArray = ["blue-spaceship.png", "green-spaceship.png", "red-spaceship.png"];
let ship;

class Ship {
    constructor() {
        this.width = 60;
        this.height = 60;
        this.x = 0;
        this.y = 0;
    }

    generateRef() {
        let randomShip = shipsArray[Math.floor(Math.random() * shipsArray.length)];
        this.ref = document.createElement("img");
        this.ref.src = randomShip;
        this.ref.style.width = `${this.width}px`;
        this.ref.style.height = `${this.height}px`;
        this.ref.style.display = "block"
        // this.ref.style.position = "absolute";

        document.querySelector("body").appendChild(this.ref);
        
    }

    move(x, y) {
        this.x = x;
        this.y = y;
        this.ref.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    moveUp() {
        this.move(this.x, this.y - 1);
    }

    moveDown() {
        this.move(this.x, this.y +1);
    }

    moveLeft() {
        this.move(this.x -1, this.y);
    }

    moveRight() {
        this.move(this.x +1, this.y)
    }
}

document.getElementById("gen-ship").addEventListener("click", () => {
    ship = new Ship;
    ship.generateRef();
})

//User Input

let UpBtn = false;
let DownBtn = false;
let LeftBtn = false;
let RightBtn = false;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      UpBtn = true;
    }
  
    if (event.key === "ArrowDown") {
      DownBtn = true;
    }
    if (event.key === "ArrowLeft") {
      LeftBtn = true;
    }
  
    if (event.key === "ArrowRight") {
      RightBtn = true;
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp") {
      UpBtn = false;
    }
  
    if (event.key === "ArrowDown") {
      DownBtn = false;
    }
    if (event.key === "ArrowLeft") {
      LeftBtn = false;
    }
  
    if (event.key === "ArrowRight") {
      RightBtn = false;
    }
  });

//Ship Loop


let count = 0;

let gameLoop = setInterval(() => {
    if (UpBtn) ship.moveUp();
    if (DownBtn) ship.moveDown();
    if (LeftBtn) ship.moveLeft();
    if (RightBtn) ship.moveRight();

    count++;
},10)
