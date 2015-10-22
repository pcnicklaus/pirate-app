module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'my-sweet-sweet-sweet-prince',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/pirateApp',
    SALT_WORK_FACTOR: 2,
};