import Cart from "./Cart";
import Functions from "./Functions";
import Products from "./Products";
import '../../Styles/SalesScreen.css'
import { CartProvider } from "../../Context/cartContext";
import { ProductsProvider } from "../../Context/ProuductsContext";



const SalesScreen = () => {
     
    
    
    return (
      
        <div className="sales-screen-container">
              <ProductsProvider>
            <CartProvider>
            <div className="sales-screen-column">
            
                <Products />
            </div>
            <div className="sales-screen-column">
                <Cart />
            </div>
            <div className="sales-screen-column">
                <Functions />
            </div>
            </CartProvider>
            </ProductsProvider>
        </div>
       
    );
};

export default SalesScreen;