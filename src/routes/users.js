import { Router } from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js'

export const routerUsers = Router()

routerUsers.get('/users', getUsers)
routerUsers.get('/users/:id', getUser)
routerUsers.post('/users', createUser)
routerUsers.delete('/users/:id', deleteUser)
routerUsers.put('/users/:id', updateUser)
