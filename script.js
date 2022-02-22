"use strict";



const soldier = {
health:400,
armor:100,
sayHello: function() {
    console.log("Hello");
}

};

const jonh = {
    health:100
};

jonh.__proto__ = soldier;

jonh.sayHello();

[///Running] node "w:\КУРС ДЖАВА СКРИПТ\1\20_osnovi_OOP_ptototipno_orientirovannoe_nasledovanie\tempCodeRunnerFile.js"
//Hello