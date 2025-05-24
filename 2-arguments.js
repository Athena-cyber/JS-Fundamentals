function checkArguments(myVar) {
  if (myVar.includes('Best') && myVar.includes('School')) {
    console.log('Arguments found');
  } else if (myVar.includes('Best') || myVar.includes('2')) {
    console.log('Argument found');
  } else {
    console.log('No argument');
  }
}

// Call function with different inputs
checkArguments(['Best', 'School']); // Arguments found
checkArguments(['Best']);          // Argument found
checkArguments(['Hello', 'World']); // No argument
