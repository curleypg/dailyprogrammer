var findString = function (json, string){
    var final = "";
    for (var i in json) {
        if (json[i] === string){
            final = i;
        }
        else if (typeof json[i] == 'object') {
            var tempObj = findString(json[i], string);
            if (tempObj.length > 0) {
                final = i + "->" + tempObj;
            }
        }
    }
    return final;
};

module.exports.findString = findString;
