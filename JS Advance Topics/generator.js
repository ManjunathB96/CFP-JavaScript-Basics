//!!!!!!!!!!!!!      generator   !!!!!!!!!!!!!
function* generatorFunction(){
    yield 'Hello'
    yield 'Javascript'
}

const generatorObject =generatorFunction()

for (const word of generatorObject) {
    console.log(word);
}
