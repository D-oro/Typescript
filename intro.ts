let message = 'Hello world'
console.log(message)

//Types
let anyType;
anyType = 0;
anyType = 3.5;
anyType = 'bananas';
anyType = true;
anyType = null;
anyType = undefined;

//String
let stringType = 'I am a string and cannot be reassigned to a different type';
stringType = 'but I can become a different string';

//Number
let numberType = 2;
numberType = 4.5;

//Boolean
let booleanType = true;
booleanType = false;

// you get the point... Typescript recognizes JS built in primitive data types
// String, Number (not int, double etc.), Boolean, Null, Undefined

//TypeAnnotations let us declare a type without declaring an initial value
// we can use the types string, number, any
let newString: string;
newString = 'I am a string'

let newBool: boolean;
newBool = false;

let newNumber: number;
newNumber = 3;
newNumber = 1.3;
newNumber = 0;

let newNull: null;
newNull = null;

let newUndefined: undefined;
newUndefined= undefined;

let newAny: any;
newAny = 0;
newAny = 'bananas';
newAny = 3.5;
newAny = true;