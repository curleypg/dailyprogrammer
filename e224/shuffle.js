var shuffle = function(list){
    var newArray = [];
    var oldArray = list.split(" ");
    var len = oldArray.length;
    console.log(list + " shuffles to ");
    for (i=0;i<len;i++){
        var index = Math.floor(Math.random()*oldArray.length);
        newArray.push(oldArray[index]);
        oldArray.splice(index,1);
    };
    console.log(newArray.join(" ") + " \n")
};

shuffle("a e i o u");

shuffle("raspberry blackberry nectarine kumquat grapefruit cherry raspberry apple mango persimmon dragonfruit");
