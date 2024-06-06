import {APP_NAMe} from './constants.js';
import {lkj, cvb} from './helper.js';
// import {user} from './user.js';  //SyntaxError: Identifier 'user' has already been declared (at common.js:5:7)
import {user as u} from './user.js'; 
import * as math from './functions.js';
import Admin from './admin.js';
import foo from './misc.js';

const user = {
	name: 'John',
	city: 'NY'
}

console.log(APP_NAMe);
console.log(lkj+cvb);

console.log(u); 

math.mul(2,33);
math.sum(3,43);

const a = new Admin('Vasya');
a.sayHi();

foo();