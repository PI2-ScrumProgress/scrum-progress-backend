import jwt from 'jsonwebtoken';

function jwtTokens({ userId, name, email }) {
    const user = { userId, name, email };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    return { accessToken, refreshToken };
}

export { jwtTokens };