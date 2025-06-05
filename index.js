function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        return"I'm a named function!";
    };
}
function returnsAnAnonymousFunction(){
    return function(){
        return "I'm an anonymous function";
    };
}