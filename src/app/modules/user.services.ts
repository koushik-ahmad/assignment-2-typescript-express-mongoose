import { User } from './user.interface'
import { UserModel } from './user.model'

// create user
const createUserIntoDB = async (user: User) => {
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

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
}
