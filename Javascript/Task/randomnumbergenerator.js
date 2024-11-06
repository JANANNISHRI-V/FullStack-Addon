function randomnumbergenerator(num){
    return Math.round(Math.random()*10)
}
console.log(randomnumbergenerator(10));


function rng(start,end){
    let random=Math.round(Math.random()*end);
    while(start>random){
        random=Math.round(Math.random()*end);
    }
    return random;
}
console.log(rng(100,110));