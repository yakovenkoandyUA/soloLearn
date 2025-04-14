/* TASK 4
* Execute into console next statements and explain every result in your own words:
* Create variables - x = 6, y = 15, z = 4:
    * x += y  - x++ * z
    * z = --x -y * 6
    * y /= x + 5 % z




* 'random string' + 500
* 'random string' + +'number'
* 'random string' + +'500n'
* 'random string' + parseInt('404not found')
* !!'false' == !!'true'
* 'true' == true
* 'true' === true
* [] == true` `{} == true
* */

let x = 6;
let y = 15;
let z = 4;


console.log(x);
console.log('x += y  - x++ * z', (x += y - z * x++));
// console.log(x);
// x = y - z * 7 + x
// x = 6 - 4 * 6 + 6


// x = -3;
// console.log('z = --x -y * 6', (z = --x - y * 6));
// z = -94
// console.log('y /= x + 5 % z', (y /= x + (5 % z)));
// y /= x + (5);
// y /= -4 + 5;
// y = y / 1


// console.log(2 + 3 - 1);
// x = x + y;