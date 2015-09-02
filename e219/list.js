function objective() {
    this.list = [];

    this.showList = function() {
        document.getElementById("display").innerHTML = this.list.join('<br/>');
    }
    this.addItem = function(x) {
        this.list.push(x);
    }
    this.removeItem = function(y) {
        this.list.splice(this.list.indexOf(y),1);
    }
}

todoList = new objective();
