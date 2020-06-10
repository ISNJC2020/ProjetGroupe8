let mainChar,

ennemy,
moveTop = true,
moveBottom = true,     
moveLeft = true,
moveRight= true;

const speed = 5,
ennemySpeed = 2.5,

wallLength = 400,
wallLength2 = 50,
wallLength3 = 100,
wallLength4 = 25,

wallWidth = 5,

mainCharSize = 10,
ennemySize = 10,
wallCoordinates = [];


function setup() {
    createCanvas(windowWidth, windowHeight); //on crée la zone pour dessiner
    mainChar = new Character();  //on crée un objet qui représentera le personnage principal
    ennemy = new Ennemy();
    
}

function draw() {
    frameRate (45);
    background(51);
    
    VerticalWall(105,100);
    VerticalWall(500,100);
    HorizontalWall(105,100);
    HorizontalWall(105,500);

    MediumVerticalWall(155,105);     
    MediumVerticalWall(210,105);     
    MediumVerticalWall(260,150);   
    MediumVerticalWall(200,250);    
    MediumVerticalWall(220,200);  
    MediumVerticalWall(290,150);
    MediumVerticalWall(240,250);
   
    MediumVerticalWall(305,385);
    MediumVerticalWall(335,345);
    
    MediumHorizontalWall(215,150);   
    MediumHorizontalWall(120,260);   
    MediumHorizontalWall(85,235); 
  
    

    LargeVerticalWall(180,150);     
    LargeVerticalWall(145,205);
    LargeVerticalWall(340,200);
    LargeVerticalWall(270,230);
    LargeVerticalWall(305,250);
    LargeVerticalWall(310,120);

    LargeHorizontalWall(125,180);   
    LargeHorizontalWall(145,300);   
    LargeHorizontalWall(185,225);   
    LargeHorizontalWall(295,195);   
    LargeHorizontalWall(235,120);
    LargeHorizontalWall(335,115);
    LargeHorizontalWall(330,145);
    LargeHorizontalWall(355,130);
    MediumHorizontalWall(350,160)
    
    TinyHorizontalWall(285,280);
    TinyHorizontalWall(285,330);
    TinyHorizontalWall(270,305);
    TinyHorizontalWall(245,275);
    TinyHorizontalWall(310,345);
    
    MediumVerticalWall(450,105);
   
    MediumVerticalWall(330,115);
    TinyVerticalWall(345,145);
    TinyVerticalWall()
    


    
    if(mainChar.x>ennemy.x && mainChar.x<ennemy.x+30 && mainChar.y>ennemy.y && mainChar.y<ennemy.y+30){
        fill("red");
        textSize(32);
        text('game over', 245, 255, 500, 500);
        noLoop();
    }

    mainChar.show(); //on affiche le personnage
    mainChar.update(); //on le fait se déplacer
    ennemy.show(); //on affiche l'ennemi
    ennemy.update();
}





function Character() {
    this.x = 110; // Les coordonées de l'objet
    this.y = 105;
    this.xspeed = 0; // La vitesse (et la direction si on oppose la vitesse)
    this.yspeed = 0;

    this.update = function() { //on ajoute la vitesse à la coordonée afin d'obtenir un mouvement
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.x = constrain(this.x, 0, windowWidth - mainCharSize); //on empêche le personnage de sortir du cadre
        this.y = constrain(this.y, 0, windowHeight - mainCharSize);
        wallCoordinates.forEach(wall => {
            //conditions qui detectent le mur et empeche le mouvement dans le cas ou il y en a un
               if(this.x === wall.offsetRight){
                    if(this.y > wall.offsetBot || this.y < wall.offsetTop){
                        moveLeft = true;
                    }
                }
                if(this.x + mainCharSize === wall.offsetLeft) {
                    if(this.y > wall.offsetBot || this.y < wall.offsetTop) {
                        moveRight = true;
                    }
                }
                if(this.y === wall.offsetBot) {
                    if(this.x < wall.offsetLeft || this.x > wall.offsetRight) {
                        moveTop = true;
                    }
                }
                if(this.y + mainCharSize === wall.offsetTop) {
                    if(this.x < wall.offsetLeft || this.x > wall.offsetRight) {
                        moveBottom = true;
                    }
                }
            

            if(this.x === wall.offsetRight && this.y < wall.offsetBot && this.y + mainCharSize > wall.offsetTop) {
                    moveLeft = false;
                    this.xspeed = 0;
            }

            else if(this.x + mainCharSize === wall.offsetLeft && this.y < wall.offsetBot && this.y + mainCharSize > wall.offsetTop) {
                moveRight = false;
                this.xspeed = 0;
            }

            else if(this.y === wall.offsetBot && this.x < wall.offsetRight && this.x +mainCharSize > wall.offsetLeft) {
                moveTop = false;
                this.yspeed = 0;
               
            }
            else if(this.y + mainCharSize === wall.offsetTop && this.x + mainCharSize > wall.offsetLeft && this.x < wall.offsetRight) {
                moveBottom = false;
                this.yspeed = 0;
            }   
        });
    }

    this.show = function() { //on crée visuellement le personnage
        fill('white');
        noStroke();
        rect(this.x, this.y, mainCharSize, mainCharSize);
    } 
}

function VerticalWall(x, y) { //La fonction pour créer un mur vertical
    fill('orange');
    rect(x, y, wallWidth, wallLength);
    wallCoordinates.push({
        offsetTop: y,
        offsetBot: y + wallLength,
        offsetLeft: x,
        offsetRight: x + wallWidth,
        type: 'vertical',
    })
}

function HorizontalWall(x, y) {
    fill('orange');
    rect(x, y, wallLength, wallWidth);
    wallCoordinates.push({
        offsetTop: y,
        offsetBot: y + wallWidth,
        offsetLeft: x,
        offsetRight: x + wallLength,
        type: 'horizontal',
    })
}

function MediumVerticalWall(x, y) { //La fonction pour créer un mur vertical
    fill('red');
    rect(x, y, wallWidth, wallLength2);
    wallCoordinates.push({
        offsetTop: y,
        offsetBot: y + wallLength2,
        offsetLeft: x,
        offsetRight: x + wallWidth,
        type: 'vertical',
    })
}

function MediumHorizontalWall(x, y) {
    fill('red');
    rect(x, y, wallLength2, wallWidth);
    wallCoordinates.push({
        offsetTop: y,
        offsetBot: y + wallWidth,
        offsetLeft: x,
        offsetRight: x + wallLength2,
        type: 'horizontal',
    })
}

function LargeVerticalWall(x, y) { //La fonction pour créer un mur vertical
    fill('purple');
    rect(x, y, wallWidth, wallLength3);
    wallCoordinates.push({
        offsetTop: y,
        offsetBot: y + wallLength3,
        offsetLeft: x,
        offsetRight: x + wallWidth,
        type: 'vertical',
    })
}

function LargeHorizontalWall(x, y) {
    fill('purple');
    rect(x, y, wallLength3, wallWidth);
    wallCoordinates.push({
        offsetTop: y,
        offsetBot: y + wallWidth,
        offsetLeft: x,
        offsetRight: x + wallLength3,
        type: 'horizontal',
    })
}

function TinyVerticalWall(x, y) { //La fonction pour créer un mur vertical
    fill('green');
    rect(x, y, wallWidth, wallLength4);
    wallCoordinates.push({
        offsetTop: y,
        offsetBot: y + wallLength4,
        offsetLeft: x,
        offsetRight: x + wallWidth,
        type: 'vertical',
    })
}

function TinyHorizontalWall(x, y) {
    fill('green');
    rect(x, y, wallLength4, wallWidth);
    wallCoordinates.push({
        offsetTop: y,
        offsetBot: y + wallWidth,
        offsetLeft: x,
        offsetRight: x + wallLength4,
        type: 'horizontal',
    })
}

function Ennemy() {
    this.x = random(105, 490);
    this.y = 300;
    this.xspeed = ennemySpeed;
    this.yspeed = -ennemySpeed;

    this.update = function() {
        this.x = constrain(this.x, 0, windowWidth - ennemySize);
        this.y = constrain(this.y, 0, windowHeight - ennemySize);
        this.x += this.xspeed;
        this.y += this.yspeed;
        if(this.x>100 && this.x<500 && this.y < 100 && this.y > 90){
            this.yspeed = -this.yspeed;
        }
        if(this.x>100 && this.x<500 && this.y < 480 && this.y > 470){
            this.yspeed = -this.yspeed;
        }
        if(this.y>105 && this.y<500 && this.x > 465 && this.x < 475){
            this.xspeed = -this.xspeed;
        }
        if(this.y>105 && this.y<500 && this.x > 100 && this.x < 110){
            this.xspeed = -this.xspeed;
        }
    }

    this.show = function() {
        fill('blue');
        rect(this.x, this.y, 30, 30);
    }
}

function keyPressed() {  //on dirige le personnage en fonction de la flèche du clavier qui est appuyée
    if(keyCode === UP_ARROW && moveTop ) {
        mainChar.yspeed = -speed;
        moveBottom = true;
    }  
 
    if(keyCode === DOWN_ARROW && moveBottom ) {
        mainChar.yspeed = speed;
        moveTop = true;
    }
    if(keyCode === LEFT_ARROW && moveLeft ) {
        mainChar.xspeed = -speed;
        moveRight = true;
    }

    if(keyCode ===RIGHT_ARROW && moveRight) {
        mainChar.xspeed = speed;   
        moveLeft = true;
    }
    mainChar.update();
}


function keyReleased() {  //on empêche le personnage de bouger lorse qu'aucune touche n'est appuyée
    mainChar.xspeed = 0;
    mainChar.yspeed = 0;
}


