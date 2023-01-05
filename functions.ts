// // function parameters can also be annotated!

function greeting(name: string){
    return 'Hello ' + name
}

console.log(greeting('Doro'))

// function parameters can stay optional with a ? after the parameter name
// if we don't provide an alternative (here 'human'), then it prints 'Hello there undefined'

function helloThere(name?: string){
    console.log( `Hello there ${name || 'human'}`)
}

helloThere() //prints Hello there human