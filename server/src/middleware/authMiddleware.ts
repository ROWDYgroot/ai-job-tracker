// import {Request, Response, NextFunction} from "express";
// import jwt from "jsonwebtoken";

// interface JwtPayload {
//     userId: string;
//     email: string;
// }

// export const protect = (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     try {
//         const authHeader = req.header.authorization;

//         if(!authHeader || !authHeader.startWith("Bearer ")) {
//             return res.status(401).json({
//                 message: "No token Provided",
//             })
//         }

//         const token = authHeader.split(" ")[1];

//         if(!process.env.JWT_SECRET) {
//             throw new Error("JWT_SECRET is no defined")
//         }
//     } catch (error) {
        
//     }
// }