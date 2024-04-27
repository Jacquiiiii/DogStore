import { ReactNode } from 'react'

// General Types ----------------------------
export type LayoutProps = {
  children: ReactNode
}

// Login Types ----------------------------
export type LoginState = {
  isLoggedIn: boolean,
  userId: string,
}

export type User = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

// Product Types ----------------------------
export type Product = {
  id: number,
  product_name: string,
  description: string,
  src: string,
  price: string,
  discounted_price: string,
  sales_count: number,
  inventory_count: number,
  category: string,
  created_at: string,
  quantity?: number
}

export type ProductsProps = {
  productsData: Product[]
}

export type ProductState = {
  productCategory: string
  products: Product[]
}

// Order Types ----------------------------
export type Order = {
  dogstore_user_id: string
}

export type OrderById = {
  id: string
}

export type OrderItems = {
  dogstore_order_id: string
  product_id: string | number
  quantity: string | number | undefined
  total_price: string
}

// Cart Types ----------------------------
export type CartItemProps = {
  product: Product
}

// API Response Types ----------------------------
export type ResponseData = {
  id?: string
  name: string
}

export type ResponseErrorData = {
  message: string
}

