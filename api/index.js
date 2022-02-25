module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    PORT: process.env.PORT || 900,
    JWT_SECRET: process.env.JWT_SECRET || "keep it secret, keep it safe",
    NODE_ENV: process.env.NODE_ENV || 'development'
}