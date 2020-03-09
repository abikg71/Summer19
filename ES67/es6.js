var limit = 100;
console.log(limit);

limit = 200;
limit += 100;

const limit = 200;

const email = ['me', 'you', 'we'];
email.push('myman');
console.log(email);


// let var, const

let limit = 100; // NB const does the same
{
  let limit = 10;
  console.log('back stage limit ', limit);
}
console.log("overall limit ", limit);
// prints 10, 100


var limit = 100;
{
  var limit = 10;
  console.log('back stage limit ', limit);
}
console.log("overall limit ", limit);
// prints 10, 10

function Hello(){
  let msg = "Hello";
  console.log(msg);
}

function greating(){
  let msg = "How are you?";
  console.log(msg);
}
Hello();
greating();


// Template literal
let a = `good`;
// a + "" + "morning"
let greating = `${a} morning`;
console.log(greating);

let a = 'birthday';
let b = `Happy ${ a}`;
console.log(b);

/* Operating and Destruction Assignment
  speard operator {...}
  spread operators simply spreads the individual values of A and interpolates or in other*/

words inserts them within the array.
//Reset parameters: function (...)}

// Destucting Assignment
/*Also E-6 enables destructuring assignment syntax which makes it significantly easier to extract data

from arrays and objects into separate distinct variables.
*/
// speard operator
let a =  [20,30, 21,3];
let b = [11, ...a,33, 3];
let c = [11, ...a, ...b];
  // want b = 11,33,3, 20,30,21
console.log(b);
console.log(c);

  let friend = ['emma', 'loba', 'nana'];
  let ab = ['iya','baba',...friend, 'mama'];
  console.log(ab);

  function collect(...a) {
    console.log(a);

  }
  collect(1,3,4,65,7,6,5);


  // Destucting Assignment
  let z = [4,5,6];
  let[four, five] = z;

  // let four = z[0];
  // let five = z[2];
  console.log(four, five);

  let king = {name: 'HS', kids: 0};
  // let name = king.name;
  // let kids = king.kids;
  let {name,kids} = king;
  console.log(name, kids);

  let son = {name: "Ab", 'parents':2};
  let name, parents;
  ({name, parents} = son);
  console.log(name, parents);
