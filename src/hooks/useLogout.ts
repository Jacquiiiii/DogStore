import { useDispatch } from 'react-redux'
import { logoutSuccess, setUserId } from '../store/slices/loginSlice'

const useLogout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutSuccess())
    dispatch(setUserId(''))
  }

  return { handleLogout }
}

export default useLogout
