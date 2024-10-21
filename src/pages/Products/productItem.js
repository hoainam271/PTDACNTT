import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function ProductItem(props) {
    const { item } = props;
    const dispatch = useDispatch();;
    const cart = useSelector(state => state.cartReducer);

    const handleAddToCard= () =>{
        if(cart.some(itemCart => itemCart.id === item.id)){
            dispatch(updateQuantity(item.id))
            console.log("update");
            
        }
        else{
            dispatch(addToCart(item.id,item))
        }
        
        
    }
    return (
        <>
            <div className="product__item" key={item.id}>
                <img className="product__image" src={item.AnhMinhHoa} alt={item.title} />
                <h3 className="product__title">{item.TenSanPham}</h3>
                <div className="product__price">Giá: {item.Price}$</div>
                <div className="product__button">
                    <button onClick={handleAddToCard}>Thêm vào giỏ hàng</button>
                </div>

            </div>
        </>
    )
}
export default ProductItem;