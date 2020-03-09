/* November 4, 2019
 Course from Udemy
*/

/* Let, var and const
let variable values
const for constant values

*/
var myName = "Abinet";
console.log(myName);

myName = "AbineT";
console.log(myName);
// prints both names
// Also if you you  letit is the same
// but if you use const returns console.error();

/*  Arrow functions
function functionName() {
-----
}
const functionName= {} => {
bit shorter
befits with key word "this"
}
*/
function printMyName(myName) {
  //const myName = "Abinet";
  console.log(myName);
}

printMyName("Abinet");

// Arrow
const = printMyName = {myName} =>
{
  console.log(myName);
}
printMyName("Abinet");

const multply = number => number *2;
console.log(multply(2));



/* Modules (imports & exports) is call a method somewhere ekse

Example
person. js
const person = {name = "Abinet";}
export default person

----
utilty.js
 export const clean = {} => {----}
 export const baseData = 10;

 app.js
    import person from './person.js'
    import prs from './person.js'
    you can use any of the above two because you a word dedfualt in person js
    import {baseData} from './utilty.js'

*/

// classes  are blue print for the objects
/*Classes are essentially blueprints for objects.

In our case here for javascript objects. A class is created with the class keyword and a class can have

both properties and methods.

Methods are simply functions attached to classes where properties are variables attached to classes.

You might notice from constructor functions and indeed classes are kind of a more convenient way of

creating constructor functions so you create javascript objects with classes as blueprints.

That's the idea and classes also support inheritance.

Which means you have another class which you inherit from taking all its properties and methods and

potentially adding new properties and methods.

That also might look familiar to you.

You might notice from prototypes.

Let's have a look at classes in action.

Let's create a new class here.

I'll name it person just like this.

Then you have curly braces to mark the class body.

And now there we can start using properties now in its simplest form a property is added by adding a

constructor that is a default function method.

You can add to any class which will be executed whenever you instantiate the class and the method is

created just with the name of the method parentheses and then curly braces.

And then there we can now set up properties with the this keyword and we could write this name equals max

for example.

We can now also add a method.

PrintMyName and there we could simply output this.name referring to the name property we created.

Now we can use this class to store an instance in a constant with new person and then we can execute

person.

PrintMyName.

If we now hit run we see Max.

This is how easy we can use a class.

Now I said that classes can also inherit.

So what we can do is we can create another class human, and there we might also add a constructor to

set this.gender equal to male or female of course if you want, what you feel, whatever you want and you could

at printGender and then output console log.

this.gender.

And now if person extends then that's a keyword word again extends human.

Now we inherit this property and this method printGender and we can use both on the person as well

so we can also call a person.printGender like that.

However before we run to successfully we're actually let's try it.

We'll get an error that we must call the super constructor in the derived class and that's important.

If you are extending another class and you are implementing the constructor which you don't have to.

But if you are then you have to add super this special super method in the constructor.

It's a keyword and it simply executes the parent constructor to which you of course have to to correct

to initialize the parent class.

So now you hit clear and run you'll see Max and male and obviously you could now go into your person

class and still set gender there to female which is not 100 percent correct here but that's just to show case

that this works.

Now you see we print female even though we're still calling printGender here.

But it is extended by person so these are classes and classes are used by React to create its components.

At least this is one of the two ways of creating components.

This is how you will see me use it in this course and it's important to understand that classes are

just blueprints for javascript objects and are very comparable to constructor functions where inheritance

is comparable to prototypes.
*/

class human{
  constructor(){
    this.gender = "male";
  }
  printGender(){
    console.log(this.gender);
  }
}



class person extends human {
  constructor(){
    super(){}
    this.name = "Abinet";
    this.gender = "F"; // prints F
  }

}
printMyName(){
  console.log(this.name);

}
const person = new person();
person.printMyName();
person.printGender();

// Classes, properties, and Methods
 
