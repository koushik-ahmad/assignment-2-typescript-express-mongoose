import { User } from './user.interface'
import { UserModel } from './user.model'

// create user
const createUserIntoDB = async (user: User) => {
  if (await UserModel.isUserExists(user.userId)) {
    throw new Error('User already exists!')
  }
  const result = await UserModel.create(user)

  return result
}

//get all user
const getAllUserFromDB = async () => {
  const result = await UserModel.find()

  return result
}

// get single user
const getSingleUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId })

  return result
}

// update user
const updateUserFromDB = async (userId: number, user: User) => {
  const result = await UserModel.findOneAndUpdate({ userId }, user, {
    new: true,
  })

  return result
}

// delete user
const deleteUserFromDB = async (userId: number) => {
  const result = await UserModel.findOneAndDelete({ userId })

  return result
}

// create order for user
const createOrder = async (userId: number) => {
  const result = await UserModel.findOne({ userId })

  return result
}



export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
  createOrder,
}
