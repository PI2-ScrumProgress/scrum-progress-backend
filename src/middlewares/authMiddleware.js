import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401).json({ error: 'Null token' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) {
            return res.sendStatus(403).json({ error: 'Invalid token' });
        }

        req.user = user;
        next();
    });
}

export { authenticateToken };