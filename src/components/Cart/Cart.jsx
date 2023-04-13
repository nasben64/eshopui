import React from "react";
import "./Cart.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      img2: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Fashion",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      isNew: true,
      oldPrice: 120,
      price: 100,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1613784320918-0f45d025478b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",
      img2: "https://images.unsplash.com/photo-1616994488535-d6ede04af436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
      title: "coats",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      isNew: true,
      oldPrice: 19,
      price: 15,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price"> 1 x ${item.price}</div>
          </div>
          <DeleteOutlineOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
