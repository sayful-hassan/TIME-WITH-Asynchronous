const fetchingshop = ()=>{
         return new Promise((resolve, reject)=>{
        let fetchingshop=true;
        if(fetchingshop){
        resolve("The shop is open");
    }else{
        reject("The shop is closed");
    }

    }

)}

const orederpizza = async ()=>{
try{
    console.log("checking pizza shop is open or not");
    const status = await fetchingshop();
    console.log(status);
    console.log("Let order some pizza");
}
catch (error){
    console.log(error);
    console.log("Damn come lets make some food");
}


finally{
    console.log("whatever if it opens, we order it, and this making we can shift to  night");

}

}