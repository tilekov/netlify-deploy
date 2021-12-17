import React, { useContext } from "react";
import { List, InputNumber, Button } from "antd";
import { cartContext } from "../../contexts/cartContext";

const CartItem = ({ item }) => {
  // console.log(item);
  const { deleteFromCart, changeProductCount } = useContext(cartContext);
  return (
    <List.Item
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.image1} />}
    >
      <List.Item.Meta
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{item.item.brand}</h3>
              <h4>{item.item.model}</h4>
            </div>
            <h3>{"$" + item.item.price}</h3>
          </div>
        }
        description={
          <>
            <div>{item.item.description}</div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}
            >
              <div>
                <h4>Quantity</h4>
                <Button
                  onClick={() =>
                    changeProductCount(item.count - 1, item.item.id)
                  }
                >
                  -
                </Button>
                <InputNumber value={item.count} disabled />
                <Button
                  onClick={() =>
                    changeProductCount(item.count + 1, item.item.id)
                  }
                >
                  +
                </Button>
              </div>
              <div>
                <h4>SubPrice</h4>
                <h3>{"$" + item.subPrice}</h3>
              </div>
            </div>
            <Button onClick={() => deleteFromCart(item.item.id)}>
              Remove from cart
            </Button>
          </>
        }
      />
    </List.Item>
  );
};

export default CartItem;
