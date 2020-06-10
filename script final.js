/*Note : Bonjour, voici le code correspondant au projet Labyrinthe,
    Il existe à ce jour des problèmes concernant les collisions personnage/murs,
    Ce problème ne pouvant pas être résolu sans procéder à des changement radicaux au sein du code,
    Il existe donc dans ce Labyrinthe de nombreux "passages secrets" qui vous aiderons à fuir les ennemis :)
    Amusez-vous bien ! 
*/

let mainChar,
lastMvt,
ennemyRandomSpeed = [-1,1],
storeEnnemies = [],
dispPoint,
score = 0,
life = 5,          //Modifier pour changer le nombre de vies
numberOfLives = 4, //Modifier pour changer le nombre de vies (doit toujours être une unitée en dessus de "life")
moveBottom = true,
moveTop = true, 
moveLeft = true,
moveRight= true,
menu = 0,          //Menu chargé au lancement
pointsRemaining,
dispCircle = true;


const speed = 5,
ennemySpeed = 2,
wallLength = 400,
wallLength2 = 50,
wallLength3 = 100,
wallLength4 = 25,
wallWidth = 5,
mainCharSize = 10,
ennemySize = 10,
numberOfEnnemies = 3, //Modifier pour changer le nombre d'ennemis
Distance = 10,
wallCoordinates = [],
currentPoint = [],
pointCords = [], 
itemWall = [];


function setup() {
    
    createCanvas(windowWidth, windowHeight); //On crée la zone pour dessiner
    
    mainChar = new Character();  //On crée un objet qui représentera le personnage principal
    
    for(var i=0;i<=numberOfEnnemies-1;i++){ //On crée les ennemis (adapté pour plusieurs ennemis)
        storeEnnemies[i] = new Ennemy();
    } 
    
 //On crée les points que le personnage doit ramasser
    Points(115,285);
    Points(170,170);
    Points(375,245);
    Points(355,290);
    Points(490,270);
    Points(475,450);
    Points(150,335);
    Points(200,420);
   
 //On crée les 4 murs principaux
    Wall(105,100,400,1);
    Wall(500,100,400,1);
    Wall(105,100,400,0);
    Wall(105,500,400,0);

 //On crée le reste des murs
    // Fonctionnement :
    // Wall(x, y, longueur, type de mur)
    // Si type de mur = 1, alors le mur est vertical
    // Si type de mur = 0, alors le mur est horizontal
    Wall(155,105,50,1);     
    Wall(210,105,50,1);     
    Wall(260,150,50,1);   
    Wall(200,250,50,1);    
    Wall(220,200,50,1); 
    Wall(290,150,50,1);
    Wall(240,250,50,1);
    Wall(330,115,50,1);
    Wall(215,150,50,0); 
    Wall(135,345,180,0);
    Wall(135,320,125,1);
    Wall(140,430,70,0);
    Wall(190,430,50,1);
    Wall(140,475,50,0);
    Wall(110,455,50,0);
    Wall(105,275,15,0);
    Wall(445,180,100,1);
    Wall(460,180,100,1);
    Wall(365,180,100,0);
    Wall(345,295,100,0);
    Wall(410,210,50,1);
    Wall(360,210,50,1);
    Wall(360,210,50,0);
    Wall(410,255,25,0);
    Wall(430,195,65,1);
    Wall(365,255,25,0);
    Wall(385,225,50,1);
    Wall(345,275,100,0);
    Wall(460,220,25,0);
    Wall(480,260,50,1);
    Wall(125,320,25,0);
    Wall(385,310,100,0);
    Wall(395,310,100,1); 
    Wall(300,410,100,0);
    Wall(380,295,50,1);
    Wall(355,340,25,0);
    Wall(360,360,25,1); 
    Wall(375,385,25,1);
    Wall(360,355,25,0);
    Wall(165,365,25,0);
    Wall(185,370,25,1);
    Wall(185,390,25,0);
    Wall(210,385,50,1);
    Wall(215,395,120,0);
    Wall(330,345,50,1);
    Wall(335,385,30,0);
    Wall(300,410,50,1);
    Wall(305,380,25,0);
    Wall(290,370,25,1);
    Wall(310,345,25,1);
    Wall(220,345,25,1);
    Wall(255,360,25,1);
    Wall(255,360,25,0);
    Wall(235,360,25,1);
    Wall(235,380,25,0);
    Wall(160,365,50,1);
    Wall(180,405,25,1);
    Wall(305,320,50,0);
    Wall(150,300,25,1);
    Wall(275,415,25,0);
    Wall(275,415,25,1);
    Wall(250,455,50,0);
    Wall(260,430,25,1);
    Wall(235,410,50,1);
    Wall(235,435,25,0);
    Wall(210,445,25,0);
    Wall(195,460,25,0);
    Wall(250,470,65,0);
    Wall(240,485,95,0);
    Wall(315,425,50,1);
    Wall(315,425,100,0);
    Wall(120,135,25,0);
    Wall(160,250,25,0);
    Wall(170,250,25,1);
    Wall(150,285,25,0);
    Wall(170,145,30,0);
    Wall(410,400,25,1);
    Wall(410,380,10,1);
    Wall(410,360,10,1);
    Wall(410,340,10,1);
    Wall(410,310,20,1);
    Wall(415,340,10,0);
    Wall(425,325,20,1);
    Wall(430,325,50,0);
    Wall(415,360,50,0);
    Wall(440,340,25,1);
    Wall(455,325,20,1);
    Wall(475,310,55,1);
    Wall(415,380,85,0);
    Wall(415,405,70,0);
    Wall(480,380,25,1);
    Wall(460,360,25,1);
    Wall(335,430,60,1);
    Wall(340,465,20,0);
    Wall(355,480,40,0);
    Wall(390,460,20,1);
    Wall(395,460,20,0);
    Wall(350,440,65,0);
    Wall(410,445,15,1);
    Wall(370,445,15,1);
    Wall(405,480,20,1);
    Wall(425,475,45,0);
    Wall(425,455,20,1);
    Wall(465,455,20,1);
    Wall(465,455,35,0);
    Wall(485,435,20,1);
    Wall(445,435,40,0);
    Wall(445,435,25,1);
    Wall(430,405,35,1);
    Wall(415,455,10,0);
    Wall(180,150,100,1);     
    Wall(145,205,100,1);
    Wall(340,200,100,1);
    Wall(270,230,100,1);
    Wall(305,250,100,1);
    Wall(310,120,100,1);
    Wall(480,120,100,1);
    Wall(120,275,100,1);
    Wall(125,180,100,0);   
    Wall(145,300,100,0);   
    Wall(185,225,100,0);   
    Wall(295,195,100,0);   
    Wall(235,120,100,0);
    Wall(335,115,100,0);
    Wall(355,130,100,0);
    Wall(350,165,100,0)
    Wall(385,145,100,0);
    Wall(170,325,100,0);
    Wall(285,280,25,0);
    Wall(285,330,25,0);
    Wall(270,305,25,0);
    Wall(245,285,25,0);
    Wall(480,255,25,0);
    Wall(120,260,25,0);   
    Wall(105,235,25,0); 
    Wall(450,105,25,1);
    Wall(370,130,25,1);
    Wall(345,145,50,1);
    Wall(300,100,10,1);
    Wall(270,115,10,1);
    Wall(240,100,10,1);
}

function draw() {
    background(51);
    frameRate (45);

    if(menu === 0){ //Affichage du menu initial
        
    //Création du bouton "Show Rules"
        fill(51);
        rect(150,200,175,50);
        fill('orange');
        textSize(32);
        text('Show Rules',150,210,500,500);

        if (mouseIsPressed){ //Affichage des règles
            if (mouseX<325 && mouseX>150 && mouseY<250 && mouseY>200){
                fill('orange');
                textSize(20);
               
                text('Ramassez les pièces pièces jaunes ! ', 400,215,500,500);
                text('Ne laissez pas les fantômes vous toucher !',400,235,500,500);
                text('Déplacez vous avec les flèches mais attention :',400,255,500,500);
                text('Une fois enregistré, la touche ne répondra plus',400,275,500,500);
                text('Débloquez-là en allant dans une autre direction !',400,295,500,500);
            }
        }
    //Affichage du titre
        fill('orange');
        textSize(64);
        text('LABYRINTHE',200,45,500,500);

    //Affichage du message "Press SPACE to start"
        fill('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
        textSize(32);
        text('Press SPACE to start', 260, 135, 500, 500);
    }

    if(menu === 1) { //Affichage du jeu
    
        drawPoints(); //Initialisation des points
        drawWalls(); //Initialisation des murs

        for(var i=0;i<=numberOfEnnemies-1;i++){ //Actions menées lorsque le personnage touche un ennemi
            if(mainChar.x+mainCharSize>storeEnnemies[i].x && mainChar.x<storeEnnemies[i].x+30 && mainChar.y+mainCharSize>storeEnnemies[i].y && mainChar.y<storeEnnemies[i].y+30){
                if(numberOfLives>0){ //Réduction du nombre de vie et téléportation de l'ennemi dans un nouvel espace
                    numberOfLives--;
                    life = life-1;
                    storeEnnemies[i].x = random(115, 460);
                    storeEnnemies[i].y = random(115, 460);
                }
                else{ //Condition de défaite
                    menu = 2;
                }
            }
        }
        //Affichage du score
        fill('orange');
        textSize(32);
        text('Points: '+score ,85,50,500,500);

        //Affichage du nombre de vies restantes
        fill ('red');
        textSize(32);
        text('Life: '+life, 425,50,500,500);


        mainChar.show(); //Affichage du personnage
        mainChar.update(); //Deplacement du personnage
        for(var i=0;i<=numberOfEnnemies-1;i++) {
            storeEnnemies[i].show(); //Affichage de l'ennemi
            storeEnnemies[i].update(); //Déplacement de l'ennemi
        }  
        
        //Condition de victoire
        if (score == 8){ 
            menu = 2;
         }
    }

    if(menu === 2){ //Affichage de la page de défaite / victoire

    //Conditions d'affichage en cas de victoire / défaite
        if (score == 8){
            fill('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
            textSize(50);
            text('Congratulations!', 125,250,500,500);
        }
        else{
            fill("red");
            textSize(50);
            text('game over', 175, 250, 500, 500);
        }

    //Bouton 'QUIT'
        fill(51);
        textSize(32);
        rect(100,360,90,35);
        fill('orange');
        text('QUIT', 105,360,500,500);

        if(mouseIsPressed){
            if(mouseX<190 && mouseX>100 && mouseY<395 && mouseY>360){
                window.location.replace('https://google.fr/')
            }
        }

    //Bouton 'RESTART'
        fill(51);
        rect(350,360,155,30);
        fill('orange');
        text('RESTART', 355,360,500,500)

        if(mouseIsPressed){
            if(mouseX<505 && mouseX>350 && mouseY<390 && mouseY>360){
                location.reload();
            }
        }
    }
 }
 
//Initialisation du personnage
class Character {
    constructor() {
        this.x = 110; // Point d'apparition du personnage
        this.y = 105;
        this.xspeed = 0; // La vitesse (et la direction si on oppose la vitesse) du personnage
        this.yspeed = 0;
        this.update = function () {
            this.x += this.xspeed;
            this.y += this.yspeed;
            this.x = constrain(this.x, 0, windowWidth - mainCharSize); //On empêche le personnage de sortir du cadre
            this.y = constrain(this.y, 0, windowHeight - mainCharSize);

            for(var i=0;i<wallCoordinates.length;i++){ //Conditions de collisions personnage/murs (Le problème se trouve içi... quelque part... :/ )
                
                if (this.x === wallCoordinates[i].offsetRight) {
                    if (this.y > wallCoordinates[i].offsetBot || this.y < wallCoordinates[i].offsetTop) {
                        moveLeft = true;
                    }
                }
                if (this.x + mainCharSize === wallCoordinates[i].offsetLeft) {
                    if (this.y > wallCoordinates[i].offsetBot || this.y < wallCoordinates[i].offsetTop) {
                        moveRight = true;
                    }
                }
                if (this.y === wallCoordinates[i].offsetBot) {
                    if (this.x < wallCoordinates[i].offsetLeft || this.x > wallCoordinates[i].offsetRight) {
                        moveTop = true;
                    }
                }
                if (this.y + mainCharSize === wallCoordinates[i].offsetTop) {
                    if (this.x < wallCoordinates[i].offsetLeft || this.x > wallCoordinates[i].offsetRight) {
                        moveBottom = true;
                    }
                }


                if (this.x === wallCoordinates[i].offsetRight && this.y < wallCoordinates[i].offsetBot && this.y + mainCharSize > wallCoordinates[i].offsetTop) {
                    moveLeft = false;
                    this.xspeed = 0;
                }
                else if (this.x + mainCharSize === wallCoordinates[i].offsetLeft && this.y < wallCoordinates[i].offsetBot && this.y + mainCharSize > wallCoordinates[i].offsetTop) {
                    moveRight = false;
                    this.xspeed = 0;
                }
                else if (this.y === wallCoordinates[i].offsetBot && this.x < wallCoordinates[i].offsetRight && this.x + mainCharSize > wallCoordinates[i].offsetLeft) {
                    moveTop = false;
                    this.yspeed = 0;
                }
                else if (this.y + mainCharSize === wallCoordinates[i].offsetTop && this.x + mainCharSize > wallCoordinates[i].offsetLeft && this.x < wallCoordinates[i].offsetRight) {
                    moveBottom = false;
                    this.yspeed = 0;
                }
            }
            
        };
        this.show = function () { //Affichage du personnage
            fill('white');
            noStroke();
            rect(this.x, this.y, mainCharSize, mainCharSize);
        };
    }
 }

 //Initialisation des ennemis
class Ennemy {
    constructor() {
        this.x = random(115, 460); //Coordonnées d'apparition des ennemis
        this.y = random(115, 460);
        this.xspeed = random(ennemyRandomSpeed) * ennemySpeed; //Direction de déplacement initial des ennemis et leurs vitesse
        this.yspeed = random(ennemyRandomSpeed) * ennemySpeed;

        this.update = function () { //Déplacement de l'ennemi
            this.x += this.xspeed;
            this.y += this.yspeed;
            //On empêche l'ennemi de sortir de la zone de jeu
            if (this.x > 105 && this.x < 500 && this.y < 105 && this.y > 100) {
                this.yspeed = -this.yspeed;
            }
            if (this.x > 105 && this.x < 500 && this.y < 475 && this.y > 470) {
                this.yspeed = -this.yspeed;
            }
            if (this.y > 105 && this.y < 500 && this.x > 465 && this.x < 470) {
                this.xspeed = -this.xspeed;
            }
            if (this.y > 105 && this.y < 500 && this.x > 100 && this.x < 105) {
                this.xspeed = -this.xspeed;
            }
        };
        this.show = function () { //Affichage de l'ennemi
            fill('blue');
            rect(this.x, this.y, 30, 30);
        };
    }
 }

 //Initialisation des points 
 function Points(x,y){
    pointCords.push({
        xPoint: x,
        yPoint: y,
    });
}

//Affichage des points 
function drawPoints() {
    pointsRemaining = pointCords.length;
    for(var i=0;i<pointsRemaining;i++) { //Actions menées lorsque le personnage touche un point : disparition du point et vérification des coordonnées des autres points encore présents
        if(mainChar.x+mainCharSize>pointCords[i].xPoint-5 && mainChar.x<pointCords[i].xPoint+5 && mainChar.y+mainCharSize>pointCords[i].yPoint-5 && mainChar.y<pointCords[i].yPoint+5){
            pointCords.splice(i, 1);
            score = score +1;
            pointsRemaining -= 1; 
        }
        else { //Affichage des points
            fill('yellow');
            circle(pointCords[i].xPoint, pointCords[i].yPoint, 10);   
        }
    }
}

//Initialisation des murs
function Wall(x, y, z, type) {
    if(type === 1){ //La fonction pour créer un mur vertical
        rect(x, y, wallWidth, z);
        wallCoordinates.push({ //Coordonnées de collisions murs/personnage
            offsetTop: y,
            offsetBot: y + z,
            offsetLeft: x,
            offsetRight: x + wallWidth,
            size: z,
            type: 1,
        });
    }
    else if(type===0) { //La fonction pour créer un mur horizontal
        rect(x, y, z, wallWidth);
        wallCoordinates.push({ //Coordonnées de collisions murs/personnage
            offsetTop: y,
            offsetBot: y + wallWidth,
            offsetLeft: x,
            offsetRight: x + z,
            size: z,
            type: 0,
        });
    }
 }

//Affichage des murs
function drawWalls() {
    wallCoordinates.forEach(drawWalls => { //Couleur des murs en fonction de leurs taille
        if(drawWalls.size === 400){
            fill('#FF7A00');
        }
        else if(drawWalls.size === 100) {
            fill('#5946B2');
        }
        else if(drawWalls.size === 50) {
            fill('#FF3855');
        }
        else if(drawWalls.size === 25) {
            fill('#299617');
        }
        if(drawWalls.type === 0) { //Coordonnées des murs horizontaux
            rect(drawWalls.offsetLeft,drawWalls.offsetTop,drawWalls.size,wallWidth);
        }
        else if(drawWalls.type === 1) { //Coordonnées des murs verticaux
            rect(drawWalls.offsetLeft, drawWalls.offsetTop, wallWidth,drawWalls.size);
        }
    });
 }

//Initialisation des mouvements du personnage
function keyPressed() {  //On dirige le personnage avec les flèches du clavier
    if(keyCode === UP_ARROW && moveTop ) {
        if(lastMvt != "top") {
            mainChar.yspeed = -speed;
            moveBottom = true;
            lastMvt = "top";
        }
    }  
 
    if(keyCode === DOWN_ARROW && moveBottom ) {
        if(lastMvt != "down") {
            mainChar.yspeed = speed;
            moveTop = true;
            lastMvt = "down";
        }
    }
    if(keyCode === LEFT_ARROW && moveLeft ) {
        if(lastMvt != "left") {
            mainChar.xspeed = -speed;
            moveRight = true;
            lastMvt = "left";
        }
    }

    if(keyCode ===RIGHT_ARROW && moveRight) {
        if(lastMvt != "right") {
            mainChar.xspeed = speed;   
            moveLeft = true;
            lastMvt = "right";
        }
    }
    if(keyCode === 32) { //Lancement du jeu : (keycode == 32) correspond à la barre d'espace
        menu = 1;
    }
    mainChar.update();
 }

function keyReleased() {  //On empêche le personnage de bouger quand aucune touche n'est appuyée
    mainChar.xspeed = 0;
    mainChar.yspeed = 0;
 }