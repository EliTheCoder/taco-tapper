const socket = io.connect("65.25.235.148");
// getting elements
let tacocounter = document.getElementById("tacocounter");
let tpscounter = document.getElementById("tpscounter");
let body = document.getElementById("body");
let title = document.getElementById("tabname");
let tpccounter = document.getElementById("tpccounter");
// and now for the shop
let grandpas = document.getElementById("grandpas");
let stands = document.getElementById("stands");
let trucks = document.getElementById("trucks");
let shacks = document.getElementById("shacks");
let counties = document.getElementById("counties");
let states = document.getElementById("states");
let countries = document.getElementById("countries");
let planets = document.getElementById("planets");
let solarsystems = document.getElementById("solarsystems");
let galaxies = document.getElementById("galaxies");
let universes = document.getElementById("universes");
let growthrays = document.getElementById("growthrays");
let lettucelaser = document.getElementById("lettucelasers");
let meatmountains = document.getElementById("meatmountains");
let ionfusers = document.getElementById("ionfusers");
let greatgrandpas = document.getElementById("greatgrandpas");
// and now for the boosts
let doubletappers = document.getElementById("doubletappers");
let duplicators = document.getElementById("duplicators");
let energizers = document.getElementById("energizers");
let bajablasts = document.getElementById("bajablasts");
// last tacos value
let lasttacos = 0;
// defining taco (the main object of the code)
let taco = {tacos: 0, el: document.getElementById("taco"), click: function() {this.tacos = this.tacos + boosts.tpc;}};
// defining shop (things that make tacos for you)
let shop = {};
shop.buy = function(item, amount, minus){if (taco.tacos >= item.cost) {item.num = item.num + amount; taco.tacos = taco.tacos - item.cost; this.tps = this.tps + item.prod; item.cost = Math.round(item.cost * 1.5); minus.innerHTML = commaPrint(item.cost);}};
shop.tps = 0;
shop.grandpas =      {num: 1, cost: 100,       prod: 1};
shop.stands =        {num: 1, cost: 500,       prod: 5}; 
shop.trucks =        {num: 1, cost: 1000,      prod: 10};
shop.shacks =        {num: 1, cost: 5000,      prod: 50};
shop.counties =      {num: 1, cost: 10000,     prod: 100};
shop.states =        {num: 1, cost: 50000,     prod: 500};
shop.countries =     {num: 1, cost: 100000,    prod: 1000};
shop.planets =       {num: 1, cost: 500000,    prod: 5000};
shop.solarsystems =  {num: 1, cost: 1000000,   prod: 10000};
shop.galaxies =      {num: 1, cost: 5000000,   prod: 50000};
shop.universes =     {num: 1, cost: 10000000,  prod: 100000};
shop.growthrays =    {num: 1, cost: 50000000,  prod: 500000};
shop.lettucelasers = {num: 1, cost: 100000000, prod: 1000000};
shop.meatmountains = {num: 1, cost: 500000000, prod: 5000000};
shop.ionfusers =     {num: 1, cost: 1000000000,prod: 10000000};
shop.greatgrandpas = {num: 1, cost: 5000000000,prod: 50000000};
// defining boosts (things that give you more tpc)
let boosts = {};
boosts.buy = function(item, amount, minus) {if (taco.tacos >= item.cost * amount) {minus.innerHTML = commaPrint(item.num); item.num = item.num + amount; taco.tacos = taco.tacos - item.cost * amount; this.tpc = this.tpc + item.prod;}};
boosts.tpc = 1;
boosts.doubletappers = {num: 1, cost: 10000,       prod: 1};
boosts.duplicators =   {num: 1, cost: 1000000,     prod: 100};
boosts.energizers =    {num: 1, cost: 100000000,   prod: 10000};
boosts.bajablasts =    {num: 1, cost: 10000000000, prod: 1000000};
// sending tacos, tps, and tpc to html
setInterval(function(){
  if (shop.tps > 0) {
    taco.tacos += shop.tps/10;
  }
  if (lasttacos !== taco.tacos) {
    tacocounter.innerHTML = commaPrint(Math.floor(taco.tacos));
    lasttacos = taco.tacos;
  }
  title.innerHTML = commaPrint(Math.floor(taco.tacos)) + " Tacos - Taco Tapper";
}, 100);
setInterval(function(){tpscounter.innerHTML = commaPrint(shop.tps);}, 100);
setInterval(function(){tpccounter.innerHTML = commaPrint(boosts.tpc);}, 100);
// saving tacos
function save() {savePrice(); window.localStorage.tacos = parseInt(taco.tacos); window.localStorage.tps = parseInt(shop.tps); window.localStorage.tpc = parseInt(boosts.tpc);}
function importSave() {importPrice(); taco.tacos = parseInt(window.localStorage.tacos); shop.tps = parseInt(window.localStorage.tps); boosts.tpc = parseInt(window.localStorage.tpc);}
window.onload = function(){if (window.localStorage.grandpas) {importSave();} };
setInterval(function(){save();}, 30000);
// super tacoz
let supertacoz = false;
// enter code
function enterCode() {
  let pass = prompt("Enter Code:");
  socket.emit("entercode", pass);
// add commas to number
function commaPrint(input) {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// reset
taco.reset = function(){taco.tacos = 0; boosts.tpc = 1; shop.tps = 0; resetPrice();};
// keydowns
window.addEventListener("keydown", function(evt) {
  //defining all the keys
  // numbers:
  //0
  if (evt.keyCode == 48) {shop.buy(shop.galaxies, 1, galaxies);}
  //1
  if (evt.keyCode == 49) {shop.buy(shop.grandpas, 1, grandpas);}
  //2
  if (evt.keyCode == 50) {shop.buy(shop.stands, 1, stands);}
  //3
  if (evt.keyCode == 51) {shop.buy(shop.trucks, 1, trucks);}
  //4
  if (evt.keyCode == 52) {shop.buy(shop.shacks, 1, shacks);}
  //5
  if (evt.keyCode == 53) {shop.buy(shop.counties, 1, counties);}
  //6
  if (evt.keyCode == 54) {shop.buy(shop.states, 1, states);}
  //7
  if (evt.keyCode == 55) {shop.buy(shop.countries, 1, countries);}
  //8
  if (evt.keyCode == 56) {shop.buy(shop.planets, 1, planets);}
  //9
  if (evt.keyCode == 57) {shop.buy(shop.solarsystems, 1, solarsystems);}
  // \
  if (evt.keyCode == 220 && supertacoz === true) {
    supertacoz = false; alert("supertacoz off");
  } else {if (evt.keyCode == 220 && supertacoz === false) {
    supertacoz = true; alert("supertacoz on")
  }}
  // [
  if (evt.keyCode == 219 && supertacoz === true) {shop.tps = shop.tps * 2;}
});
//key ups
window.addEventListener("keyup", function(evt) {
    // space
  if (evt.keyCode == 32) {taco.click();}
});
// saving prices
function savePrice() {
  window.localStorage.grandpas = parseInt(shop.grandpas.cost);
  window.localStorage.stands = parseInt(shop.stands.cost);
  window.localStorage.trucks = parseInt(shop.trucks.cost);
  window.localStorage.shacks = parseInt(shop.shacks.cost);
  window.localStorage.counties = parseInt(shop.counties.cost);
  window.localStorage.states = parseInt(shop.states.cost);
  window.localStorage.countries = parseInt(shop.countries.cost);
  window.localStorage.planets = parseInt(shop.planets.cost);
  window.localStorage.solarsystems = parseInt(shop.solarsystems.cost);
  window.localStorage.galaxies = parseInt(shop.galaxies.cost);
  window.localStorage.universes = parseInt(shop.universes.cost);
  window.localStorage.growthrays = parseInt(shop.growthrays.cost);
  window.localStorage.lettucelasers = parseInt(shop.lettucelasers.cost);
  window.localStorage.meatmountains = parseInt(shop.meatmountains.cost);
  window.localStorage.ionfusers = parseInt(shop.ionfusers.cost);
  window.localStorage.greatgrandpas = parseInt(shop.greatgrandpas.cost);
}
function importPrice() {
  shop.grandpas.cost = parseInt(window.localStorage.grandpas);
  shop.stands.cost = parseInt(window.localStorage.stands);
  shop.trucks.cost = parseInt(window.localStorage.trucks);
  shop.shacks.cost = parseInt(window.localStorage.shacks);
  shop.counties.cost = parseInt(window.localStorage.counties);
  shop.states.cost = parseInt(window.localStorage.states);
  shop.countries.cost = parseInt(window.localStorage.countries);
  shop.planets.cost = parseInt(window.localStorage.planets);
  shop.solarsystems.cost = parseInt(window.localStorage.solarsystems);
  shop.galaxies.cost = parseInt(window.localStorage.galaxies);
  shop.universes.cost = parseInt(window.localStorage.universes);
  shop.growthrays.cost = parseInt(window.localStorage.growthrays);
  shop.lettucelasers.cost = parseInt(window.localStorage.lettucelasers);
  shop.meatmountains.cost = parseInt(window.localStorage.meatmountains);
  shop.ionfusers.cost = parseInt(window.localStorage.ionfusers);
  shop.greatgrandpas.cost = parseInt(window.localStorage.greatgrandpas.cost);
}
// reset price
function resetPrice() {
  taco.tacos = 0;
  shop.tps = 0;
  boosts.tpc = 1;
  shop.grandpas =      {num: 1, cost: 100,       prod: 1};
  shop.stands =        {num: 1, cost: 500,       prod: 5}; 
  shop.trucks =        {num: 1, cost: 1000,      prod: 10};
  shop.shacks =        {num: 1, cost: 5000,      prod: 50};
  shop.counties =      {num: 1, cost: 10000,     prod: 100};
  shop.states =        {num: 1, cost: 50000,     prod: 500};
  shop.countries =     {num: 1, cost: 100000,    prod: 1000};
  shop.planets =       {num: 1, cost: 500000,    prod: 5000};
  shop.solarsystems =  {num: 1, cost: 1000000,   prod: 10000};
  shop.galaxies =      {num: 1, cost: 5000000,   prod: 50000};
  shop.universes =     {num: 1, cost: 10000000,  prod: 100000};
  shop.growthrays =    {num: 1, cost: 50000000,  prod: 500000};
  shop.lettucelasers = {num: 1, cost: 100000000, prod: 1000000};
  shop.meatmountains = {num: 1, cost: 500000000, prod: 5000000};
  shop.ionfusers     = {num: 1, cost: 1000000000, prod: 10000000};
  localStorage.clear();
  save();
}
