
var isSet = function(x,y,z,i) {
    if (i > 3) {
        return answer;
    }
    else {
        if (x[i] == y[i] && y[i] == z[i]) {
            answer = true;
            i++;
        }
        else if (x[i] != (y[i] || z[i]) && y[i] != z[i]) {
            answer = true;
            i++;
        }
        else {
            answer = false;
            i = 4;
        }
        console.log(i);
        return isSet(x,y,z,i);
    }
}
