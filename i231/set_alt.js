var findSet = function(x,y,z,i){
    var shape = "DOS";
    var color = "RPG";
    var num = "123";
    var fill = "OHF";
    if (i>3){
        console.log(z);
    }
    else {
        if (x[i] == y[i]) {
            z += x[i];
        }
        else {
            switch(i) {
                case 0: z += shape.replace(x[0],"").replace(y[0],"");
                    break;
                case 1: z += color.replace(x[1],"").replace(y[1],"");
                    break;
                case 2: z += num.replace(x[2],"").replace(y[2],"");
                    break;
                default: z += fill.replace(x[3],"").replace(y[3],"");
            }
        }
    i++;
    findSet(x,y,z,i);
    }
}

var a = "SP3F";
var b = "SR1H";
findSet(a,b,"",0);
