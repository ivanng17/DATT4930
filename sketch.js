let worldMap;
let page;
let aiUsers;
let greenValue;
let personHeight;
let personWidth;
let robotWidth;
let robotHeight;
let man;
let robot;
let backgroundValue;
let questions;
let questionNumber;

function preload(){
  worldMap = loadImage("map.png");
  aiUsers = loadTable("data.csv", "csv", "header");
  man = loadImage("man.png");
  robot = loadImage("robot.png");
  questions = loadTable("questions.csv", "csv", "header");
}

function setup() {
  page = 0;
  canvasWidth = 1920;
  canvasHeight = 1080;
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  questionSelect = 0;
}

function draw() {
  if (page == 0){
    titleScreen();
  }
  else if (page == 1){
    map1();
  }
  else if (page == 2){
    map2();
  }
  else if (page == 3){
    map3();
  }
  else if (page == 4){
    map4();
  }
  else if (page == 5){
    map5();
  }
  else{
    map6();
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW && page > 0){
    page--;
    print(page);
  }
  else if (keyCode === RIGHT_ARROW && page < 6){
    page++;
    print(page);
  }
}

function titleScreen(){
  backgroundValue = 0;
  background(backgroundValue);
  textFont('Courier New');
  textStyle(BOLD)
  textSize(canvasWidth/15);
  fill("green");
  textAlign(CENTER);
  text("What Have We Cre(AI)ted?", canvasWidth/2, canvasHeight/2);
  textSize(canvasWidth/20);
  text("By: Ivan Ng", canvasWidth/2, canvasHeight/2 + canvasHeight/4);
  textSize(canvasWidth/60);
  text("A net.art inspired data visualization of AI usage every 2 years over the past 10 years.", canvasWidth/2, canvasHeight/2 + canvasHeight/16);
  textSize(canvasWidth/40);
  text("Use the left and right arrow keys to navigate", canvasWidth/2, canvasHeight/2 + canvasHeight/4 + canvasHeight/16);
  textSize(canvasWidth/120);
  text("Credits: \n Outline of world map from Outline World Map: https://www.outline-world-map.com/ \n AI usage by population data obtained from Siddhi Naik's AI statistics at Resourcera: https://resourcera.com/data/artificial-intelligence/ai-statistics \n Background questions were inspired by the reasons for using AI from Digital 2026 by Simon Kemp at Datareportal: https://datareportal.com/reports/digital-2026-one-billion-people-using-ai \n Man silhouette by kuba at Openclipart.org: https://openclipart.org/detail/333205/simple-man-silhouette \n Robot silhouette by NicholasJudy567 at Openclipart.org: https://openclipart.org/detail/323392/robot", canvasWidth/2, canvasHeight/2 + canvasHeight/4 + canvasHeight/8);
}

function map1(){
  frameRate(1);
  backgroundValue = 200;
  background(backgroundValue);
  greenValue = 0;
  questionNumber = 1;

  drawMap(greenValue);
  drawSentence1(greenValue);
  drawSentence2(greenValue);
  drawPopulation(greenValue);
  drawRobots(backgroundValue);
  drawPercentage(greenValue);
  drawQuestions(greenValue, questionNumber);
}

function map2(){
  frameRate(1);
  backgroundValue = 150;
  background(backgroundValue);
  greenValue = 50;
  questionNumber = 3;

  drawMap(greenValue);
  drawSentence1(greenValue);
  drawSentence2(greenValue);
  drawPopulation(greenValue);
  drawRobots(backgroundValue);
  drawPercentage(greenValue);
  drawQuestions(greenValue, questionNumber);
  
}

function map3(){
  frameRate(1);
  backgroundValue = 125;
  background(backgroundValue);
  greenValue = 75;
  questionNumber = 5;

  drawMap(greenValue);
  drawSentence1(greenValue);
  drawSentence2(greenValue);
  drawPopulation(greenValue);
  drawRobots(backgroundValue);
  drawPercentage(greenValue);
  drawQuestions(greenValue, questionNumber);
}

function map4(){
  frameRate(1);
  backgroundValue = 50;
  background(backgroundValue);
  greenValue = 150;
  questionNumber = 10;

  drawMap(greenValue);
  drawSentence1(greenValue);
  drawSentence2(greenValue);
  drawAsterisk(greenValue);
  drawPopulation(greenValue);
  drawRobots(backgroundValue);
  drawPercentage(greenValue);
  drawQuestions(greenValue, questionNumber);
}

function map5(){
  frameRate(1);
  backgroundValue = 25;
  background(backgroundValue);
  greenValue = 200;
  questionNumber = 15;

  drawMap(greenValue);
  drawSentence1(greenValue);
  drawSentence2(greenValue);
  drawAsterisk(greenValue);
  drawPopulation(greenValue);
  drawRobots(backgroundValue);
  drawPercentage(greenValue);
  drawQuestions(greenValue, questionNumber);
}


function map6(){
  frameRate(1);
  backgroundValue = 0;
  background(backgroundValue);
  greenValue = 230;
  questionNumber = 20;

  drawMap(greenValue);
  drawSentence1(greenValue);
  drawSentence2(greenValue);
  drawAsterisk(greenValue);
  drawPopulation(greenValue);
  drawRobots(backgroundValue);
  drawPercentage(greenValue);
  drawQuestions(greenValue, questionNumber);
}

function drawPopulation(g){
  tint(0, g, 0);
  personWidth = man.width/5;
  personHeight = canvasHeight/3;
  for (let i=0; i<5; i++){
  personWidth = man.width/5
    for (let j=0; j<20; j++){
      image(man, canvasWidth/12 + personWidth + man.width/2, personHeight, man.width/8, man.height/8);
      personWidth += man.width/4;
      }
    personHeight = personHeight + man.height/8;
  }
}

function drawRobots(bg){
  tint(bg);
  robotWidth = man.width/5;
  robotHeight = canvasHeight/3;
  for (let j=0; j < 100/(8000000000 / aiUsers.get(page-1, 2)); j++){
    print(aiUsers.get(page-1, 2));
    image(robot, canvasWidth/12 + robotWidth + man.width/2, robotHeight, man.width/6, man.height/12);
    robotWidth += man.width/4;
  }
  robotHeight = robotHeight + man.height/8;
}

function drawMap(g){
  tint(0, g, 0);
  imageMode(CENTER);
  image(worldMap, canvasWidth/2, canvasHeight/2, canvasWidth/1.5, canvasWidth/1.5 / 2);
}

function drawSentence1(g){
  fill(0, g, 0);
  textSize(canvasWidth/40);
  textAlign(LEFT);
  text("Year: " + aiUsers.get(page-1, 0), canvasWidth/8, canvasHeight/2 + canvasHeight/3)
}

function drawSentence2(g){
  fill(0, g, 0);
  textSize(canvasWidth/40);
  textAlign(RIGHT);
  text("# of AI users: " + aiUsers.get(page-1, 1), canvasWidth/2 + canvasWidth/8*3, canvasHeight/2 + canvasHeight/3)
}

function drawAsterisk(g){
  fill(0, g, 0);
  textSize(canvasWidth/80);
  textAlign(LEFT);
  text("*predicted value", canvasWidth/8, canvasHeight/2 + canvasHeight/3 + canvasHeight/32)
}

function drawPercentage(g){
  fill(0, g, 0);
  textSize(canvasWidth/80);
  textAlign(RIGHT);
  text("(" + round(100/(8000000000 / aiUsers.get(page-1, 2)), 2) + "% of current population / " + round(100/(8000000000 / aiUsers.get(page-1, 2)), 2) + " people per 100)", canvasWidth/2 + canvasWidth/8*3, canvasHeight/2 + canvasHeight/3 + canvasHeight/32);
}

function drawQuestions(g, q){
  fill(0, g, 0, 75);
  textSize(canvasWidth/80);
  textAlign(CENTER);
  for (let i=0; i<q; i++){
  text(questions.get(i, 1), random(0, canvasWidth), random(0, canvasHeight/4));
  }
}


