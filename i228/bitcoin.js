var http = require('http');

function getBitcoinData (market, currency){

    var url = "http://api.bitcoincharts.com/v1/trades.csv?symbol=" + market + currency;
    var data = "";

    var bitcoinData = http.get(url, function(response){
        if (response.statusCode != 200) {
            console.log("error: " + response.statusCode + " " + http.STATUS_CODES[response.statusCode]);
            bitcoinData.end();
        };

        response.setEncoding('utf8');
        response.on("data", function(chunk){
            //format data
            data += chunk;
        });
        response.on("end", function(){
            var latest = data.split('\n')[0];
            var price = parseFloat(latest.split(',')[1]).toFixed(2);
            var unixtime = parseInt(latest.split(',')[0]);
            var date = new Date(unixtime*1000);

            if (data != '') {
                console.log("On " + date);
                console.log("Price of BTC in " + currency + " on the " + market +" market = " + price);
            }
            else {
                console.log("no data receieved from " + market + " in " + currency);
            }
        });
    });

    bitcoinData.on("error", function(err){
        console.log("got error: " + err.message);
    });
}

getBitcoinData("rock", "USD");
