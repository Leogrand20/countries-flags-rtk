import { type FC, useEffect } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'

import { selectError } from '@store/selectors/error-selectors'
import { clearError } from '@store/slices/errorSlice'
import { useAppDispatch, useAppSelector } from '@store/store'

export const Error: FC = () => {
  const errorMessage: string = useAppSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  )
}
