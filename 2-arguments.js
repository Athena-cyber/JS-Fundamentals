const myVar = 'p@ssword'

if (myVar.length >= 8 && myVar.includes('@')){
    console.log('Arguments found');
} else if (myVar.length >= 8 || myVar.includes('@')){
    console.log('Argument found');
}else {
    console.log('No argument');
}
