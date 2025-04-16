import { FC, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { clearError } from "../../redux/slices/errorSlice";
import { selectError } from "../../redux/selectors/error-selectors";

export const Error: FC = () => {
  const errorMessage: string = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);

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
  );
};
