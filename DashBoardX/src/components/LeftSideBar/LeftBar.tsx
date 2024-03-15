import { Link } from 'react-router-dom';

import styles from "./LeftBar.module.scss";

import home from "../../assets/icons/home.svg";
import layers from "../../assets/icons/layers.svg"
import lock from "../../assets/icons/lock.svg";

const LeftBar = () => {
    return(
        <div className = {styles.leftBar}>
            <div className= {styles.leftBar__title}>Dash UI</div>
            <Link to="/">
                <div className = {styles.leftBar__mainbtn}>
                    <img src={home} alt="home"></img>
                    Dashboard
                </div>
            </Link>
            <div className = {styles.leftBar__pages}>
                <ul className = {styles.page}>
                    <div className = {styles.page__pgAuth__subtitles}>
                        <img src={layers} alt="page"></img>
                        Pages
                    </div>
                    <li className = {styles.page__pgAuth}>
                        <div className = {styles.page_pgAuth__content}>
                            <ul className = {styles.page__pgAuth__content__menu}>
                                <li>Profile</li>
                                <li>Settings</li>
                                <Link to="/billing">
                                    <li>Billing</li>
                                </Link>
                                <Link to = "/pricing">
                                    <li>Pricing</li>
                                </Link>
                            </ul>
                        </div>
                    </li>
                    <div className = {styles.page__pgAuth__subtitles}>
                        <img src={lock} alt="lock"></img>
                        Authentication
                    </div>
                    <li className = {styles.page__pgAuth}>
                        <div className = {styles.page_pgAuth__content}>
                            <ul className = {styles.page__pgAuth__content__menu}>
                                <li>Sign In</li>
                                <li>Sign Up</li>
                                <li>Forget Password</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftBar;