import Buttons from "./Buttons";
import CartItems from "./CartItems";

const Cart = ({ products,total ,increment,decrement,reset,change,empty,del}) => {
  return (
    <div className="">
      <h1 className="text-center text-4xl text-green-600 font-semibold m-6">
        Your Cart
      </h1>

<Buttons reset={reset} change={change} empty={empty} />
      {products.map((product) => (
        <CartItems product={product} key={product.id} increment={increment} decrement={decrement} del={del}/>
      ))}
<div className={"text-center font-semibold text-2xl mt-10 "}>
        {total ==0 ? (
          <span className="text-red-600 font-semibold text-3xl">Empty</span>
        ) : (
          `Total : ${total} EGP`
        )}
          
</div>
    </div>
  );
};

export default Cart;
