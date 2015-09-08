function rule90(input){
    count = 0;
    len = input.length;
    while (count < 25){
        var replace = input.replace(/0/g, " ").replace(/1/g, "x");
        console.log(replace);
        input = "0" + input + "0";
        for (i=1;i<=len;i++){
            (input[i-1] === input [i+1])
            ? input += "0"
            : input += "1";
        };
        input = input.slice(len+2, (len*2)+2);
        count++;
    };
};

rule90("0000000000000000000010000000000000000000000");
