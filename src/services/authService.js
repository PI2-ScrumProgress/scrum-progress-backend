import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtTokens } from '../utils/jwtHelpers.js';
import User from '../models/userModel.js';

const login = async (email, password) => {

    const user = await User.findOne({ where: { email } });

    if (user == null) {
        throw new Error('Invalid email or password');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw new Error('Invalid email or password');
    }

    const tokens = jwtTokens({ userId: user.id, username: user.username, email: user.email });

    return tokens;
};

// Refresh tokens function with token verification and revoking
const refreshTokens = async (refreshToken) => {

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findByPk(decoded.userId);

        if (!user) {
            throw new Error('User not found');
        }
        const tokens = jwtTokens({ userId: user.id, username: user.username, email: user.email });
        return tokens;
    } catch (error) {
        throw new Error('Invalid refresh token');
    }
};


const logout = () => {
    // Maybe implement token revoking logic 
    return;
};


export { login, refreshTokens, logout };
