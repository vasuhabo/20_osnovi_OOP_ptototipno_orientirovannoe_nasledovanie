"use strict";

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // теперь мы можем найти оба свойства в rabbit:
  alert( rabbit.eats ); // true (**)
  alert( rabbit.jumps ); // true

