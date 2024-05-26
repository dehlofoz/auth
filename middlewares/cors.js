const allowedCors = [ 
  "https://dehlofozfront.nomoredomainswork.ru",
  "https://dehlofoz.nomoredomainswork.ru",
  "http://localhost:3000"


 ];



function cors(req, res, next) {
    const { origin } = req.headers;
    
    if (allowedCors.includes(origin)) { 
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    next();
}

module.exports = cors;
