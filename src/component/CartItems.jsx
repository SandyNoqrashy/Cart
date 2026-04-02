const CartItems = ({ product: { name, price, count,id } ,increment,decrement,del}) => {
  return (
    <div className="w-full bg-slate-500 mb-5 py-3 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-white gap-4">
        <div className="flex gap-4  flex-1">
          <div className="font-bold min-w-[100px]">{name}</div>
          <div>{price} EGP</div>
          <div className="text-sky-500">count: {count}</div>
        </div>
        
          <div className="space-x-5">
      <button className="btn btn-success btn-sm" onClick={()=>increment(id)}>+</button>
      <button className="btn btn-warning btn-sm" onClick={()=> decrement(id)} disabled={count==1?true:false} >-</button>
      <button className="btn btn-error btn-sm" onClick={()=> del(id)}>Del</button>
    </div>

        <div className="font-bold min-w-[120px] ">
          Total: {price * count} EGP
        </div>


    </div>
     </div>
  );
};

export default CartItems;