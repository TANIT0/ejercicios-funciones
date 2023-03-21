function descuento(ARTICULO){
    if(ARTICULO = 1){
        return "no hay descuento";
    }else if(ARTICULO>=2 && ARTICULO<=4){
        return "10%"
    }
    else if(ARTICULO>=5 && ARTICULO<=10){
        return "20%"
    }
    else if(ARTICULO>10){
        return "30%"
    }
   
    }
        
        
        
    

console.log("1 "+ descuento(1))
console.log("3 "+ descuento(3))
console.log("5 "+ descuento(5))
console.log("23 "+ descuento(23))
