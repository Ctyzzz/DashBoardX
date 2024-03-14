import Header from "./Header/Header"
import useModal from "../hooks/useModal"

import { useAuth } from "../hooks/auth/useAuth"
import { useEffect } from 'react';
import { useSelector } from "react-redux";


const Layout = () => {

  const [isShowingModal, toggleModal, setIsShowing] = useModal();
  //const { isAuth } = useAuth()
  const isAuth = !!useSelector(state=>state.authReducer.accessToken.token)
  useEffect(()=>{isAuth&&setIsShowing(false)},[isAuth])
  // useEffect(() => {
	// 	if (isAuth) {
	// 		setIsShowing(false)
	// 	}
	// }, [isAuth])
  return (
    <>
        
    </>
  )
}

export { Layout }

