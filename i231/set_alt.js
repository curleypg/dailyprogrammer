var findSet = function(x,y,z,i){
    var shape = "DOS";
    var color = "RPG";
    var num = "123";
    var fill = "OHF";
    if (i>3){
        return z;
    }
    else {
        if (x[i] == y[i]) {
            c = x[i];
        }
        else {
            switch(i) {
                case 0: c = shape.replace(x[0],"").replace(y[0],"");
                    break;
                case 1: c = color.replace(x[1],"").replace(y[1],"");
                    break;
                case 2: c = num.replace(x[2],"").replace(y[2],"");
                    break;
                default: c = fill.replace(x[3],"").replace(y[3],"");
            }
        }
        i++;
        return findSet(x,y,(z + c),i);
    }
}

var a = "SP3F";
var b = "SR1H";
console.log(findSet(a,b,"",0));
