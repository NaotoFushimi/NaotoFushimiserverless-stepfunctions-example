module.exports.entry = async (event ,context , callback)=>{

    const hoge = {
        0:{
            id : 0,
            name: "hoge"
        }
        ,
        1:{
            id : 1,
            name: "fuga"
        }
        ,
        2:{
            id : 2,
            name: "piyo"
        }
        ,
        3:{
            id : 3,
            name: "ava"
        }
    };

    callback(null , hoge);
}

/*
 serverless logs -f childTask --region ap-northeast-1 --profile dev --stage dev --tail --interval 500
 * */
module.exports.childTask = async (event ,context , callback)=>{

    const num = Math.random();
    if (num < 0.75){
        console.log("ERROR!!!")
        const error = new Error("something is wrong");
        return callback(error);
    }

    const name= event.name
    callback(null , {Name : name});
}

/*
 serverless logs -f lastTask --region ap-northeast-1 --profile dev --stage dev --tail --interval 500
* */
module.exports.lastTask = async (event ,context , callback)=>{
    console.log(event)
    callback(null , event);
}
