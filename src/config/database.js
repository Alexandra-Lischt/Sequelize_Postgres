// Database config (ACESSO)
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'password',
    database: 'sqlnode',
    define: {
        timestamps: true,
        underscored: true
    }
}

// created_at and updated_at (timestamps)
