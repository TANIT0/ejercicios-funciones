function NOTAS(nota){
    if(nota < 60){
        return "F";
    }else if(nota>=60 && nota<=69){
        return "D"
    }
    else if(nota>69 && nota<=79){
        return "C"
    }
    else if(nota>79 && nota<=89){
        return "B"
    }
    else if(nota>89){
        return "A"
    }
        
        
        
    }


console.log("12 "+ NOTAS(12))
console.log("67 "+ NOTAS(67))
console.log("71 "+ NOTAS(71))
console.log("82 "+ NOTAS(82))
console.log("99 "+ NOTAS(99))
