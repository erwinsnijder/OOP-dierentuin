function fish() { }
fish.prototype = {
  constructor: fish,
  name: " ",
  breathes: "water",
  skin: "scales",
  describe: function() {
    console.log(this.name + " breathes "+ this.breathes + fish.prototype.breathes +
     " and have " + fish.prototype.skin);
  }
};

let guppy = Object.create(fish.prototype);
guppy.name = "guppy"
guppy.breathes = "fresh "
guppy.describe();

let angelfish = Object.create(fish.prototype);
angelfish.name = "angelfish"
angelfish.breathes = "salt "
angelfish.describe();

let shark = new fish("bruce");

function mamals() { }
mamals.prototype = {
  constructor: mamals,
  name: "",
  breathes: "air",
  skin: "fur",
  describe: function() {
    console.log("i am" + this.type + "my name is " + this.name+", " + "i breathe "
    + mamals.prototype.breathes
   + " and have " + mamals.prototype.skin);
  
  }
};

let bear = Object.create(mamals.prototype);
bear.type = bear;
bear.name = "carlos";
bear.describe();

// document.getElementById("bear description").innerHTML = bear.describe();

let zebra = Object.create(mamals.prototype);
zebra.type = zebra;
zebra.name = "iglesias";
  zebra.describe();


 function birds() { }
 birds.prototype = {
    constructor: birds,
    name: " ",
    moves: "fly",
    skin: "feathers",
    describe: function() {
      console.log( this.name + " i " +birds.prototype.moves + " and have "
       + birds.prototype.skin);
    }
  };
  let falcon = Object.create(birds.prototype);
    falcon.name = "falcon";
    falcon.describe();

  let parrot = Object.create(birds.prototype);
  parrot.name = "parrot";
  parrot.describe();

  function caretaker() { }
  caretaker.prototype = {
    constructor: mamals,
    name: "",
    caresfor: "",
    smokes: "",
    describe: function() {
    console.log("my name is " + this.name + " i take care of the "
    +this.caresfor);
    }
  };

  let garry = Object.create(caretaker.prototype);
  garry.name = "garry",
  garry.caresfor = mamals,
  garry.describe();

  let harry = Object.create(caretaker.prototype);
  harry.name = "harry",
  harry.caresfor = birds,
  harry.describe();




