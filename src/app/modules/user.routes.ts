import express from 'express'
import { UserControllers } from './user.controllers'

const router = express.Router()

router.post('/', UserControllers.createUser)
router.get('/', UserControllers.getAllUsers)
router.get('/:userId', UserControllers.getSingleUser)
router.patch('/:userId', UserControllers.updateSingleUser)
router.delete('/:userId', UserControllers.deleteUser)

export const UserRoutes = router
