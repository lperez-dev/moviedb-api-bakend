const app = require('./app')
const sequelize = require('./database/index')

require('dotenv').config()
const PORT = process.env.PORT

const connectSequelize = async () => {
    try {
        await sequelize.sync({force: true})
        app.listen(PORT, () => {
            console.log(`🚀 API listening on PORT ${PORT}`)
        })
    } catch (err) {
        console.error('Unable to connect to the database:', err.message)  
    }
}

connectSequelize()