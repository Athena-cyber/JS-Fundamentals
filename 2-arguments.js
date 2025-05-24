const myVar = ['Best School', 'Best', 'nothing'];
for(let i = 0; i<myVar.length; i++){
    console.log(myVar[i])
}if (myVar.includes('Best') && myVar.includes('School')){
    console.log('Arguments found');
}else if (myVar.includes('Best') || myVar.includes('2')){
    console.log('Argument found');
} else{
    console.log('No argument');
    }
