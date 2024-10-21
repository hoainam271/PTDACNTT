import { useDispatch } from "react-redux";
import {updateQuantity,deleteItem} from '../../actions/cart';
import { useRef } from "react";
function CartItem(props){
    const {item}=props;
    const inputRef=useRef();
    const dispatch = useDispatch();
    const handleUp = () =>{
        dispatch(updateQuantity(item.id))
        inputRef.current.value= parseInt(inputRef.current.value)+1
    }
    const handleDown =() =>{
        if(item.quantity>1){
            dispatch(updateQuantity(item.id,-1))
            inputRef.current.value= parseInt(inputRef.current.value)-1
        }
    }
    const handleDelete= () =>{
        dispatch(deleteItem(item.id))
    }
    return(
        <>
        <div className="cart__item" key={item.id}>
                        <div className="cart__image">
                            <img src={item.info.thumbnail} alt={item.info.title} />
                        </div>
                        <div className="cart__content">
                            <h4 className=" cart__title">{item.info.title}</h4>
                            <h4 className=" cart__price-new">{(item.info.price - item.info.price * item.info.discountPercentage / 100).toFixed(0)}$</h4>
                            <h4 className=" cart__price-old">{item.info.price}$</h4>
                        </div>
                        <div className="cart__quantity">
                            <button onClick={handleDown}>-</button>
                            <input ref={inputRef} value={item.quantity}  />
                            <button onClick={handleUp}>+</button>
                        </div>
                        <button onClick={handleDelete}>Xoa</button>
        </div>
        </>
    )
}
export default CartItem;