import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./index.scss"
function CartMini(){
    // lấy ra số lượng quantity để cho bên cạnh giỏ hàng
    const cart = useSelector(state => state.cartReducer);
    console.log(cart);
    const total=cart.reduce((sum,item)=>{
        return sum+item.quantity;
    },0)
    return (
        <>
        <NavLink to="cart"className="cart-mini" >{<FaShoppingCart className="icon"/>}({total})</NavLink>
        </>
    )
}
export default CartMini;