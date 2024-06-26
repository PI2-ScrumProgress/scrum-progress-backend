import jwt from 'jsonwebtoken';

function jwtTokens({ userId, username, email }) {
    const user = { userId, username, email };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    return { accessToken, refreshToken };
}

export { jwtTokens };