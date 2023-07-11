function pthBit(number, position) {
    
let mask = 1 << position;             
let result = number & mask;         
let lsb = result >> position;          

console.log(lsb);
}

pthBit(2145, 5);