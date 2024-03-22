import { FormEvent } from "react"
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { loginSuccess, setUserId } from '../store/slices/loginSlice'

const useLogin = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          filters: {
            data: { email },
            comparisonOperator: '=',
            caseSensitive: true
          },
          type: 'login',
          password
        })
      })

      const data = await response.json()

      if (data && data.id) {
        dispatch(loginSuccess())
        dispatch(setUserId(data.id))
        router.push('/')
      } else {
        alert('Invalid email address or password')
      }
    } catch (error) {
      console.error('An error occurred while logging in: ', error)
      alert('An error occurred while logging in. Please try again.')
    }
  }

  return { handleSubmit }
}

export default useLogin