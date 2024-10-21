import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"
import { getCookie } from "../../helpers/cookie";
import {useSelector} from "react-redux"
import CartMini from "../../components/CartMini";
import logo from '../../image/05180ec5-16cf-4602-a150-4011fb24088ca.png';

function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);
    console.log(isLogin);
    return (
        
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                        Logo
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/" >Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="products" >Sản phẩm</NavLink>
                            </li>
                            <li>
                                <NavLink to="about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" >Liên hệ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="layout-default__account">
                        {token ? (<>
                            <NavLink to="logout">Đăng xuất</NavLink>
                        </>) : (<>
                            <NavLink to="login">Đăng nhập</NavLink>
                            <NavLink to="register">Đăng ký</NavLink>
                        </>)}

                    </div>
                    <div className="layout-default__cart">
                        <CartMini />
                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    COPYRIGHT @ 2024 BY NHÓM 12 PHÁT TRIỂN DỰ ÁN CÔNG NGHỆ THÔNG TIN
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault;