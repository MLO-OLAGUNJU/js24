// Javascript Modules
//It is used to export different sections of code from one file to another
//These sections are usually functions or classes

/* import playGuitar from "./guitar.js";
import { shredding as shred, plucking as fingerpicking } from "./guitar.js";
console.log(playGuitar());
console.log(shred());
console.log(fingerpicking()); */

//or

/* import * as Guitars from "./guitars.js";
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
// not recommended
//use the first one!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1 */

import User from "./users.js";
const me = new User("email@gmail.com", "Manny");
console.log(me);
console.log(me.greeting());
