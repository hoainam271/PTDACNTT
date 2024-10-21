import { del, get, patch, post } from "../utils/request";
import {getCookie} from "../helpers/cookie"
export const getProducts = async() =>{
    const result = await get("product");
    return result;
}