function combinations (array, k) {//get all possible combinations
    var i, j, sub, next;
    var ret = [];
    for (i=0;i<array.length; i++){
        if (k === 1) {
            ret.push([array[i]]);
        } else {
            sub = combinations(array.slice(i+1, array.length), k-1);
            for (j = 0; j < sub.length; j++){
                next = sub[j];
                next.unshift(array[i]);
                ret.push(next);
            }
        }
    }
    return ret;
}

var findThird = function(x,y,z,i){//given 2 cards, find the third to make it a set
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
        return findThird(x,y,(z + c),i);
    }
}

var findSet = function (combos){//given the first 2 cards in the array, does the third complete the set
    var finalArray = [];
    for (i=0;i<combos.length;i++){
        if (findThird(combos[i][0], combos[i][1], "", 0) === combos[i][2]) {
            finalArray.push(combos[i]);
        }
    }
    return finalArray;
}

var set = function(board){//return array of solutions
    var combos = combinations(board.split(" "), 3);
    var sets = findSet(combos);
    return sets;
}

console.log(set("SP3F DP3O DR2F SP3H DG3O SR1H SG2O SP1F SP3O OR3O OR3H OR2H"));
