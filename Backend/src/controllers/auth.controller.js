const userModel = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenBlacklistModel = require('../model/blacklist.model');



/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

async function registerUserController(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    if (isUserAlreadyExist) {

        return res.status(400).json({ message: 'User already exists with this email or username' });
    }
    const hash = await bcrypt.hash(password, 10);
    const User = await userModel.create({
        username,
        email,
        password: hash
    });
    const token = jwt.sign(
        { id: User._id, username: User.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }

    );

    res.cookie('token', token);

    await User.save();
    res.status(201).json({
        message: 'User registered successfully',
        user: {
            id: User._id,
            username: User.username,
            email: User.email
        }
    });
}

/**
 * @name loginUserController
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
async function loginUserController(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    res.cookie('token', token);
    res.status(200).json({
        message: 'User logged in successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        },
        token
    });

}


/** 
 * @name logoutUserController
 * @route GET /api/auth/logout
 * @desc clear token from user cookie and add token in the blacklist
 * @access Public
 */
async function logoutUserController(req, res) {
    const token = req.cookies.token;
    if (token) {
        await tokenBlacklistModel.create({ token });
    }
    res.clearCookie('token');
    res.status(200).json({ message: 'User logged out successfully' });
}

/**
 * @name getMeController
 * @route GET /api/auth/get-me
 * @desc Get the current logged in user details
 * @access Private
 */
async function getMeController(req, res) {
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message: 'User details fetched successfully',
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });

}

module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
};