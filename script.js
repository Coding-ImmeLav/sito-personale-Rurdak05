// creo una variabile e la metto =0
let a=0

// creo la funzione che fa comparire il menu o la fa scomparire
// in base a quanto vale a 
function compariMenu() {
    if(a==0) {
        // se la a vale 0 succede quello che scrivo qui
        document.getElementById("menu").style.display = "initial";
        a = 1;
    }
    else if(a==1) {
        document.getElementById("menu").style.display = "none";
        a = 0;
    }
} 