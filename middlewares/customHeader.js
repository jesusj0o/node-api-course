const customHeader = (req, res, next) => { 
    try{ 
        const apiKey = req.headers.api_key;
        if(apiKey === 'jo-01'){ 
            next();
        }else{ 
            res.status(403); 
            res.send({error:"INCORRECT_API_KEY"})
        }

    }catch(e){ 
        res.status(403); 
        res.send({error:"SOMETHING_WENT_WRONG_ON_HEADER"})
    }
}

module.exports = customHeader; 