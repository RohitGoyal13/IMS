import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {

    const authheader = req.headers.authorization;

    if(!authheader || !authheader.startsWith("Bearer ")){
        return res.status(401).json({
            message: "Not authorized, no token"
        })
    }
    const token = authheader.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(403).json({
            message: "Not authorized, token failed"
        });
    }
};