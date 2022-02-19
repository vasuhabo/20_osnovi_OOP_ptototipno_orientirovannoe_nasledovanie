"use strict";

let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // walk взят из прототипа
  rabbit.walk(); // Animal walk

  //Если у нас есть метод в animal, он может быть вызван на rabbit:

