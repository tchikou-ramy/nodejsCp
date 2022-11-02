
 function PG() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var stringLength = 8;
    var randomstring = '';
    for (var i=0; i<stringLength; i++) {
        var num = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(num,num+1);
    }
    console.log(randomstring);
}
PG();   
