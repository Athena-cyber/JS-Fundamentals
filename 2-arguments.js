const testCases = [
  ['Best', 'School'],       // should print: Arguments found
  ['Best'],                 // should print: Argument found
  ['Apple', 'Orange']       // should print: No argument
];

for (const myVar of testCases) {
  console.log('Testing:', myVar);

  if (myVar.includes('Best') && myVar.includes('School')) {
    console.log('Arguments found');
  } else if (myVar.includes('Best') || myVar.includes('2')) {
    console.log('Argument found');
  } else {
    console.log('No argument');
  }

  console.log('---'); // Just for spacing output
}
