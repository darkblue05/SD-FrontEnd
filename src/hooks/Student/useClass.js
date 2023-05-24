import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../useAuth'

import { fetchAllClass, createOne, deleteOne, fetchOne } from 'src/store/class'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useClass = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.userClass)
  const router = useRouter()

  const fetchAll = async () => {
    try {
      const action = await dispatch(fetchAllClass({ id: router.params.id }))

      if (fetchAllClass.rejected.match(action)) {
        console.log(action.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const createOneClass = async data => {
    try {
      let action = await dispatch(createOne({ id: router.params.id, data }))

      if (createOne.fulfilled.match(action)) {
        toast.success('Clase añadida')
      } else {
        console.log(action)
        toast.error('Clase no encontrada')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteOneClass = async id => {
    try {
      let action = dispatch(deleteOne({ id }))

      if (deleteOne.fulfilled.match(action)) {
        toast.success('Clase eliminada')
      } else {
        console.log(action)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchOneClass = async id => {
    try {
      let action = dispatch(fetchOne({ id }))

      if (fetchOne.fulfilled.match(action)) {
        return action
      } else {
        console.log(action)
      }
    } catch (error) {
      console.log(error)
    }
    return null
  }

  useEffect(() => {
    if (router.isReady) {
      fetchAll()
    }
  }, [router.isReady])

  return {
    store,
    router,
    fetchAll,
    createOneClass,
    deleteOneClass,
    fetchOneClass
  }
}

export default useClass
