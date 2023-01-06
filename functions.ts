// function parameters can also be annotated!

function greeting(name: string){
    return 'Hello ' + name
}

console.log(greeting('Doro')) // prints Hello Doro

// function parameters can stay optional with a ? after the parameter name. 
// if we don't provide an alternative (here 'human'), then it prints 'Hello there undefined'

function helloThere(name?: string){
    console.log( `Hello there ${name || 'human'}`)
}

helloThere() //prints Hello there human

// we can also give the function parameter a default value 
// that way we don't need to annotate them as the type is infered from the default value.

function helloWorld(name = 'world'){
    console.log(`Hello ${name}`)
}

helloWorld() // prints Hello world 
helloWorld('Doro') // prints Hello Doro