import { Schema, model } from 'mongoose'
import { Address, Orders, User, UserName } from './user.interface'

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'FirstName is required'] },
  lastName: { type: String, required: [true, 'lastName is required'] },
})

const addressSchema = new Schema<Address>({
  street: { type: String, required: [true, 'street is required'] },
  city: { type: String, required: [true, 'city is required'] },
  country: { type: String, required: [true, 'country is required'] },
})

const ordersSchema = new Schema<Orders>({
  productName: { type: String, required: [true, 'productName is required'] },
  price: { type: Number, required: [true, 'price is required'] },
  quantity: { type: Number, required: [true, 'Quantity is required'] },
})

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    required: [true, 'UserId is required'],
    unique: true,
  },
  userName: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  password: { type: String, required: [true, 'Password is required'] },
  fullName: { type: userNameSchema, required: [true, 'UserName is required'] },
  age: { type: Number, required: [true, 'age is required'] },
  email: { type: String, required: [true, 'email is required'] },
  isActive: { type: Boolean, required: [true, 'isActive is required'] },
  hobbies: {
    type: [String],
    required: [true, 'Hobby is required'],
  },
  address: { type: addressSchema, required: [true, 'Address is required'] },
  orders: { type: [ordersSchema] },
})

export const UserModel = model<User>('User', userSchema)
