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

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);

  function addCart(productFood) {
    if (
      !currentSale.some(
        (currentProduct) => currentProduct.id === productFood.id
      )
    ) {
      setCurrentSale([...currentSale, productFood]);
    }
  }
  function removeCart(productFoodId) {
    const newArr = currentSale.filter(
      (product) => product.id !== productFoodId
    );
    setCurrentSale(newArr);
  }

  const filterCard = products.filter(
    (product) =>
      product.category
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") === filteredProducts
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
      </ContentPage>
    </ContainerPage>
  );
}

export default App;
