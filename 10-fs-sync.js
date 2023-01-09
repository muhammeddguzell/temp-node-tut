const {readFileSync,writeFileSync}=require('fs');  // Another road

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

// console.log(first,second);

writeFileSync(
    './content/result-sync.txt',
    `here is the result: ${first}, ${second}`,           // Create txt file
    { flag: 'a'}
)