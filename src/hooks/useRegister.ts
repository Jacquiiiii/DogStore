import { FormEvent } from "react"
import { useRouter } from 'next/router'

const useRegister = () => {
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const firstName = formData.get('first name')
    const lastName = formData.get('last name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Creates user in the database
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            first_name: firstName,
            last_name: lastName,
            email,
            password
          },
          type: 'register'
        })
      })

      const data = await response.json()

      if (data) {
        alert('Registration successful. Please log in.')
        router.push('/login')
      } else {
        alert('An error occurred while registering. Please try again.')
      }
    } catch (error) {
      console.error('An error occurred while registering: ', error)
      alert('An error occurred while registering. Please try again.')
    }
  }

  return { handleSubmit }
}

export default useRegister