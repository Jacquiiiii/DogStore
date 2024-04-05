import { ReactNode } from 'react'

export type User = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
}

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

export type CartItemProps = {
  product: Product
}

export type LayoutProps = {
  children: ReactNode
}

export type LoginState = {
  isLoggedIn: boolean,
  userId: string,
}

export type ResponseData = {
  id?: string
  name: string
}

export type ResponseErrorData = {
  message: string
}

