const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

//config value
dotenv.config();
const jwtSecret = require("../config/keys").jwtSecret;



const auth = (req, res, next) => {
    const token = req.header("x-auth-token")

    //CHECK FOR TOKEN
    if(!token) res.status(401).json({message: "NoToken, Autorization Denied"})
    

   try {
        //VERIFY TOKEN
    const decoded = jwt.verify(token, jwtSecret)

    //ADD USER FROM PAYLOAD
    req.user = decoded;
    next()
   } catch (error) {
       res.status(400).json({message: "Token Is not Valid"})
   }
}


module.exports = auth;