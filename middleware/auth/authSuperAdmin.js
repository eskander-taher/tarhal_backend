const jwt = require('jsonwebtoken');

const authSuperAdmin = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'superadmin') {
            return res.status(401).json({ message: 'Unauthorized, not a superadmin' });
        }
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authSuperAdmin;