var test;
var word_list = [
    'billowy',
    'biopsy',
    'chinos',
    'defaced',
    'chintz',
    'sponged',
    'bijoux',
    'abhors',
    'fiddle',
    'begins',
    'chimps',
    'wronged'];
var len = word_list.length;

for (i=0;i<len;i++) {
for (j=0;j<word_list[i].length-1;j++) {
	if (word_list[i].charCodeAt(j) <= word_list[i].charCodeAt(j+1)) { test = true;}
	else { test = false; break;}
}
if (test === true) {document.write(word_list[i] + " IN ORDER <br>");}
else {document.write(word_list[i] + " NOT IN ORDER <br>");}
}
