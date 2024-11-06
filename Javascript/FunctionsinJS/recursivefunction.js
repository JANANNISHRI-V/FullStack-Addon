function add(num){
    console.log(num);
    if(num<10){
        add (++num);
    }
}
add(1);