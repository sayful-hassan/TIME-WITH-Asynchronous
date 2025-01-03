function boilingwater(callback) {
    console.log("The water is boiling ... it take like 3 seconds");
    setTimeout(function(){
        console.log("The water is ready");
        callback();
    },3000);

}
function learn(){
    console.log("Learning programming ");

}
boilingwater(function(){
    console.log("You can come and have");}
);

