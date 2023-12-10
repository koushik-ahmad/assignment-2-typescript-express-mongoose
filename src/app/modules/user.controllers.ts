/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from './user.services'
import { userValidationSchema } from './user.validation'

// create user
const createUser = async (req: Request, res: Response) => {
  try {
    // data validation using Zod
    const { user: userData } = req.body
    const zodParsedData = userValidationSchema.parse(userData)

    const result = await userServices.createUserIntoDB(zodParsedData)

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
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

    if (!result) {
      throw {
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      }
    }

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

// update single user
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId)

    const userData = req.body

    const result = await userServices.updateUserFromDB(userId, userData)

    if (!result) {
      throw {
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      }
    }

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
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

// delete user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId)
    const result = await userServices.deleteUserFromDB(userId)

    if (!result) {
      throw {
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      }
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
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

// Create order for user
const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId)
    const orderData = req.body

    const user = await userServices.createOrder(userId)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      })
    }
    // if the orders already exists for the user
    if (!user.orders) {
      user.orders = []
    }
    // Append the new product to the orders array
    user.orders.push(orderData)

    // Save the updated user object
    await user.save()

    // Send a success response
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
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

// get all orders for user
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId)
    const user = await userServices.getAllOrderForUser(userId)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      })
    }
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: user.orders,
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

// Calculate Total Price of Orders for a Specific User

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteUser,
  createOrder,
  getAllOrders,
}
