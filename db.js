const Sequelize = require('sequelize')
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

db.sync()
    .then(res => console.log("Database connected"))
    .catch(err => console.error(err))

module.exports = db 