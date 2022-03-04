const initialMemoryUsage = process.memoryUsage().heapUsed;
const myName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let  i=0; i<=10000; i++){
    
}

const currentMemoryUsage = process.memoryUsage().heapUsed

console.log('Hai, ${myName}');
console.log('Mode environment: ${environment}');
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);