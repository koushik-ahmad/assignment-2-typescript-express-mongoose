import express from 'express'
import { UserControllers } from './user.controllers'

const router = express.Router()

router.post('/users', UserControllers.createUser)
router.get('/users', UserControllers.getAllUsers)
router.get('/users/:userId', UserControllers.getSingleUser)
router.patch('/users/:userId', UserControllers.updateSingleUser)
router.delete('/users/:userId', UserControllers.deleteUser)

// order routes
router.put('/users/:userId/orders', UserControllers.createOrder)
router.get('/users/:userId/orders', UserControllers.getAllOrders)
router.get('/users/:userId/orders/total-price', UserControllers.calculateTotalPrice)

export const UserRoutes = router
