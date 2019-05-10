// function fish(breathes, skin, animal) {
//   this.breathes = breathes;
//   this.skin = scales;
//   this.class = animal;
//   // console.log("a fish breathes " + this.breathes + " and a fish has " + this.skin);
//   }

// function fish() { }

// fish.prototype = { constructor: fish,
//   breathes: "water", 
//   describe: function() {
//     console.log("i breathe" + breathes);
//   }
// };
function fish() { }

fish.prototype = {
  constructor: fish,
  breathes: "water",
  skin: "scales",
  describe: function() {
    console.log("i breathe");
  }
};

let guppy = Object.create(fish.prototype);

guppy.describe();

let angelfish = Object.create(fish.prototype);

angelfish.describe();
// console.log("a fish breathes " + this.breathes + " and a fish has " + this.skincolor);

let mamal = {
  breathes: "air",
  skin: "fur",
  class: "animal"
};
console.log("a mamal breathes " + mamal.breathes + " and a mamal has " + mamal.skin);

let bird= {
  breathes: "air",
  skin: "feathers",
  class: "animal"
};
console.log("a bird breathes " + bird.breathes + " and a bird has " + bird.skin);

// console.log(" a fish is an "+ fish.class + "," + " a mamal is an "+ mamal.class + "," + " a bird is an "+ bird.class);
 let caretaker= {
name: "garry",
  care: "animals"

 };
 console.log (caretaker.name + " takes care of " + caretaker.care);

 

//  function joinfishFraternity(candidate) {
//   if (candidate.constructor === fish) {
//     return true;
//   } else {
//     return false;
  
//   }
// }