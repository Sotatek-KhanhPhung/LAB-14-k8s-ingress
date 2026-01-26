export default {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "root",
    DB: "db",
    PORT: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
