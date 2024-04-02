import { DataTypes } from 'sequelize'

import { sequelize } from '../database/database.js'

import bcryptjs from 'bcryptjs'

export const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['admin', 'user']]
    }
  }
}, {
  hooks: {
    beforeCreate: async (user) => {
      const hashedPassword = await bcryptjs.hash(user.password, 10)
      user.password = hashedPassword
    }
  }
})
