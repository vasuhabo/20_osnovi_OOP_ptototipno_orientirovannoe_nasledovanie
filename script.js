"use strict";



const soldier = {
health:400,
armor:100

};

const jonh = {
    health:100
};

jonh.__proto__ = soldier;

console.log(jonh);

//[Running] node "w:\КУРС ДЖАВА СКРИПТ\1\20_osnovi_OOP_ptototipno_orientirovannoe_nasledovanie\tempCodeRunnerFile.js"
//{ health: 100 }