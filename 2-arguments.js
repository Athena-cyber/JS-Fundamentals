const myVar = ['Best School','Best', ' ']

if (myVar.includes('Best') && myVar.includes('School')){
    console.log('Arguments found');
}else if (myVar.includes('Best') || myVar.includes('2')){
    let myVar = 'Best';
    console.log('Argument found');
} else{
    console.log('No argument');
    }
