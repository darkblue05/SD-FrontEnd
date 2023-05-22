import axios from 'axios'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { setRegister } from 'src/store/auth'
import { useRouter } from 'next/router'

const useRegisterTeacher = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const register = async data => {
    try {
      const action = await dispatch(setRegister({ data: { ...data, type: 'PARENT' } }))

      if (setRegister.fulfilled.match(action)) {
        toast.success('Registro exitoso')
        router.push('/login')
      } else {
        toast.error('Ya existe el usuario')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    register
  }
}

export default useRegisterTeacher
