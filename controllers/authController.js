import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// Register a new user 

export const register = async (req,res) => {
    const { username, password } = req.body;

    try{
        const hashedpassword = await bcrypt.hash(password, 10);

        await User.create({
            username,
            password: hashedpassword
        })
        res.status(201).json({
            message: "User registered successfully"
        });
    }catch(err){
        if(err.code === 11000) {
            return res.status(409).json({
                message : "Username already exists"
            });
        }
        else{
            res.status(500).json({
                message: "Internal server error"
            });
        }
    }
}

export const Login = async (req, res) => {
     const {username , password} = req.body;

     const user = await User.findOne({username});

     if(!user) {
        return res.status(404).json({
            message: "User not found"
        });
             }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) {
        return res.status(401).json({
            message: "Invalid Username or Password"});
                }

    const token = jwt.sign(
        { id: user._id},
        process.env.JWT_SECRET,
        { expiresIn: '1d'}
             );

      res.status(200).json({
        message : "Login Successful"
      });
    };