import 'dotenv/config.js'
import { app } from './app.js'
import { sequelize } from './database/database.js'
import { createAdmin } from './start/admin.js'

const PORT = process.env.PORT || 3000

const main = async () => {
  try {
    await sequelize.sync()
    console.log('La conexión se ha establecido exitosamente.')

    await createAdmin()
    console.log('Se creo el usuario administrador')

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(error.message)
  }
}

main()
