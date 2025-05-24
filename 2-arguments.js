const myVar = ('Best School')

if (myVar.includes('Best') && myVar.includes('School')){
    console.log('Arguments found');
}else if (myVar.includes('Best') || myVar.includes('2')){
    console.log('Argument found');
} else{
    console.log('No argument');
    }
