import { Card, NoCart } from "./cardCart/card";

import { ContainerCart, ContainerCartTotal, HeaderCart } from "./cartStyle";
import { TotalCartFooter } from "./totalCart";

export const Cart = ({ currentSale, removeCart, cartTotal }) => {
  return (
    <ContainerCartTotal>
      <ContainerCart>
        <HeaderCart>
          <p>Carrinho de compras</p>
        </HeaderCart>
        {currentSale.length !== 0 ? (
          <>
            <ul>
              {currentSale.map((current, index) => {
                return (
                  <Card
                    key={current.id}
                    index={index}
                    currentSale={current}
                    removeCart={removeCart}
                  />
                );
              })}
            </ul>
            <TotalCartFooter
              cartTotal={cartTotal}
              removeCart={removeCart}
              currentSale={currentSale}
            />
          </>
        ) : (
          <NoCart />
        )}
      </ContainerCart>
    </ContainerCartTotal>
  );
};
