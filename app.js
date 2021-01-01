

const flashText = () => {
    //rock timed style change
  let x = document.getElementById("rock");
  setTimeout(function() {
    x.style.opacity = "1"}, 200);
  setTimeout(function() {
    x.style.opacity = ".2"}, 600);
    
    //paper timed style change
  let y = document.getElementById("paper");
  setTimeout(function() {
    y.style.opacity = "1"}, 1000);
  setTimeout(function() {
    y.style.opacity = ".2"}, 1400);
  
    //scissors timed style change
  let z = document.getElementById("scissors");
  setTimeout(function() {
    z.style.opacity = "1"}, 1800);
  setTimeout(function() {
    z.style.opacity = ".2"}, 2200);

  setTimeout(function() {
    shoot()}, 2600)
}

const shoot = () => {

  let list = document.getElementById('ul').getElementsByTagName('h1');
  let rand = Math.floor( Math.random() * list.length );

  //display and change style of random list item from computer
  let finalProduct = list[rand];
  finalProduct.style.opacity = "1";
  finalProduct.style.color = "blue"
  setTimeout(function() {
    finalProduct.style.opacity = ".2"}, 3000);
  setTimeout(function() {
    finalProduct.style.color = "black"}, 3000);
}