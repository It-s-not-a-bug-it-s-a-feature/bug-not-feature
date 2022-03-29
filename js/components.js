'use strict';

let chassisObjects = [];
let motherboardObjects = [];
let videocardObjects = [];

/*  set up chassis object */
function Component(compType, makeModel, itemPrice, itemDescription, imageUrl) {
  this.componentType = compType;
  this.model = makeModel;
  this.price = itemPrice;
  this.description = itemDescription;
  this.url = imageUrl;
  if (this.componentType.toLowerCase() === 'chassis' ||
    this.componentType.toLowercase() === 'case') {
    chassisObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'motherboard') {
    motherboardObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'videocard') {
    videocardObjects.push(this);
  }
}

/* set up object arrays of components */
//  chassis item full name, price, description, image path
new Component('chassis','Deepcool Matrix', 50, '', '');
new Component('chassis','Dell WeezleWomper', 25, '', '');
new Component('chassis','In Win Chopin', 125, '', '');
new Component('chassis','Lian Li O11', 120, '', '');
new Component('chassis','Rosewill D100', 100, '', '');
new Component('chassis','Cooler Master MB320L', 75, '', '');

//  motherboard item full name, price, description, image path
new Component('motherboard', 'ASRock B660M Pro', 75, '', '');
  { 'ASRock Chimibonga': 25 },
  { 'Gigabyte GA-AB350N': 125 },
  { 'MSI B250 M3': 90 },
  { 'MSI B450M': 90 },
  { 'ASRock B550': 140 },
];

let cpuObjects = [
  { 'Intel Core i3': 350 },
  { 'i3 10105 AIDS': 50 },
  { 'AMD Ryzen 5': 485 },
  { 'Intel i5-7500': 120 },
  { 'AMD Ryzen 5 2600': 120 },
  { 'Ryzen 5 5600X': 230 },
];

/* setup categorical configurations */
function Computer(name) {
  this.userName = name;
  this.chassis = chassisObjects[0];
  this.motherboard = motherboardObjects[0];
  this.cpu = cpuObjects[0];
}

/* test system using template constructor */
let basicComputer = new Computer('Basic User');
let midLevelComputer = new Computer("Office Worker");
let highEndComputer = new Computer("Gamer Creator");

/* test a system setup in an array */
//let testSetup = [chassis["Cooler Master MB320L"], motherboards["MSI B250 M3"], cpus["AMD Ryzen 5 2600"]];

console.log(basicComputer);
console.log(midLevelComputer);
console.log(highEndComputer);