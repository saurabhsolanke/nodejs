const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString(), 'file.txt')
// console.log('Finishing reading file')

// fs.writeFile('file.txt', 'hello world', () => {
//     console.log('Finishing writing file');
// });

b = fs.writeFileSync('file.txt', 'hello world',
);
console.log(b, 'Finishing writing filesync')