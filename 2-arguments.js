let myVar = 'p@ssword'

if (myVar.length >= 8 && myVar.includes('@')){
    console.log('Arguments found');
} else if (myVar.length >= 8 || myVar.includes('@')){
    let myVar = 'password'
    console.log('Argument found');
}else {
    let myVar = 'pass'
    console.log('No argument');
}
