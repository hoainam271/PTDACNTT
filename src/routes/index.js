
import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home"
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";

export const routes= [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },{
                path:"products",
                element:<Products />
            },{
                path:"about",
                element:<About />
            },{
                path:"contact",
                element:<Contact />
            },{
                path:"cart",
                element:<Cart />
            }
        ]
    }
]
