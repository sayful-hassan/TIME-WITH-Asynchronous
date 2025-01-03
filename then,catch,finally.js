const bakingcake = new Promise((resolve, reject)=>{
    let bakingcake=true;
    if (bakingcake){
        resolve("It's successfully maded");
    }else{
        reject("fcuk adeeel pidichu");
    }
}

);



bakingcake
.then(
    (message)=>{
        console.log(message);
        console.log("Come lets eat some cake");
        
    }
)
.catch(
    (error)=>{
        console.log(error)
        console.log("There is good news and a bad new. good means we can eat pizza, the bad news is the cake got burned");

    }
)
.finally(
    ()=>{
        console.log("No matter what if it good or not we must eat this");
    }
);