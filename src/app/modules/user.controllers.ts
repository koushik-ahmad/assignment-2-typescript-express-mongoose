/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from './user.services'

// create user
const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body
    const result = await userServices.createUserIntoDB(userData)

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: {
        code: 500,
        description: error,
      },
    })
  }
}

// get all user
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB()

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Users not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

// get single user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId)
    const result = await userServices.getSingleUserFromDB(userId)

    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Users not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
}
