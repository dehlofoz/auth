const allowedCors = [ "https://dehlofozfront.nomoredomainswork.ru/" ];


function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (allowedCors.includes(origin)) { 
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    next();
}

module.exports = cors;
