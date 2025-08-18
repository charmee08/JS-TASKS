function menu(){
    const order = parseFloat(document.getElementById("demo").value)
    switch(order){
        case 1:
            console.log("You ordered biriyani")
            break;
        case 2:
            console.log("You ordered pizza")
            break;
        case 3:
            console.log("You ordered poratta")
            break;
        default:
            console.log("SYBAU")
            break;
    }
}
