import { User } from '../models/User.js'

export const createAdmin = async () => {
  try {
    await User.create({
      username: process.env.USERNAME_ADMIN,
      password: process.env.PASSWORD_ADMIN,
      role: 'admin'
    })
  } catch {
    throw new Error('Error al crear el usuario administrador')
  }
}
