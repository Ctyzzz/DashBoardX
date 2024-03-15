import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import useModal from "../hooks/useModal"

import { useAuth } from "../hooks/auth/useAuth"
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import LeftBar from "./LeftSideBar/LeftBar";


const Layout = () => {

    const [isShowingModal, toggleModal, setIsShowing] = useModal();
    const isAuth = !!useSelector(state=>state.authReducer.accessToken.token)
    useEffect(()=>{isAuth&&setIsShowing(false)},[isAuth])

    return (
        <>
            <Outlet />
            <LeftBar/>
        </>
    )
}

export { Layout }

