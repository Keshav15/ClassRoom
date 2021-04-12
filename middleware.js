const jwt=require("jsonwebtoken");


module.exports=(req,res,next)=>{
    const token=req.headers["authorization"].slice(7);
    console.log(token);
    let decodedToken;
    try{
        decodedToken=jwt.verify(token,'SRKGRaDEr')
    } catch(err){
        err.statusCode=500;
        throw err;
    }
    if(!decodedToken)
    {
        const error=new Error('Not Authenticated');
        error.statusCode=401;
        throw error;
    }
    req.userId=decodedToken.userId;
    next();
    
   
};

