import 'dotenv/config.js'
import { app } from './app.js'
import { sequelize } from './database/database.js'

const PORT = process.env.PORT || 3000

const main = async () => {
  try {
    await sequelize.authenticate()
    console.log('La conexión se ha establecido exitosamente.')

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('No se puede conectar a la base de datos:', error)
  }
}

main()
