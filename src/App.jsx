import { useEffect, useState } from "react";
import { getFood } from "./requests/api";
import { Header } from "./componentes/header/header";
import {
  ProductList,
  ProductsFiltereds,
} from "./componentes/productList/productList";
import GlobalStyle from "./styles/globalStyle";
import { Cart } from "./componentes/cart/cart";
import { ContainerPage, ContentPage } from ".";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const addCart = (productFood) => {
    const exist = currentSale.find(
      (current, index) => current.id === productFood.id
    );

    if (!exist) {
      setCurrentSale([...currentSale, { ...productFood, countFood: 1 }]);
    } else {
      const count = exist?.countFood;
      const data = {
        ...exist,
        price: exist.price + productFood.price,
        countFood: count + 1,
      };
      const filter = currentSale.filter(
        (current, index) => current.id !== productFood.id
      );
      setCurrentSale([...filter, data]);
    }

    toast.success("Você Adicionou ao Carrinho!");
  };

  const removeCart = (productFoodId) => {
    if (productFoodId.countFood === 1) {
      const newArr = currentSale.filter((product) => product !== productFoodId);
      setCurrentSale(newArr);
    } else if (productFoodId.countFood > 1) {
      const product = productFoodId.countFood - 1;
      setCurrentSale([product]);
    }

    toast.warn("Você Removeu do Carrinho!");
  };

  const filterCard = products.filter((product) =>
    product.category
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(filteredProducts)
  );

  useEffect(() => {
    async function food() {
      try {
        const response = await getFood();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    food();
  }, []);

  useEffect(() => {
    const sumCartTotal = currentSale.reduce((acc, { price }) => {
      return acc + Number(price);
    }, 0);

    setCartTotal(sumCartTotal);
  }, [currentSale]);

  return (
    <ContainerPage>
      <GlobalStyle />
      <Header setFilteredProducts={setFilteredProducts} />
      <ContentPage>
        {filteredProducts.length === 0 ? (
          <ProductList addCart={addCart} products={products} />
        ) : (
          <ProductsFiltereds
            filterCard={filterCard}
            filteredProducts={filteredProducts}
            addCart={addCart}
          />
        )}
        <Cart
          currentSale={currentSale}
          removeCart={removeCart}
          cartTotal={cartTotal}
        />
        <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ContentPage>
    </ContainerPage>
  );
}

export default App;
