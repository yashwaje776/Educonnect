import jwt from "jsonwebtoken";

const authuser = async (req, res, next) => {
    try {
        const token = req.headers.token;  
        console.log("Received Token:", token);

        if (!token) {
            return res.json({ success: false, message: "Unauthorized user" });
        }

        const decode_token = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decode_token.id;
        console.log(decode_token.id)
        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default authuser;
