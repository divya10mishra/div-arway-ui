import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function Payment() {
  const [product] = React.useState({
    name: "plan",
    price: 2345,
    description: "24/7 support"
});


function handleToken(token){
console.log({token})
}

  return (
    <div className="App">
     <StripeCheckout
     stripeKey="pk_test_51HUZKZAcOwn9j6Ph0lj070oWlf1VN3gxwUldorfi6tqX3pKx1tGgMH0n8LtuVnJeigkgBKVxHWBWrYDLFNS5aoy100ZtuQCRYu"
     token={handleToken}
     amount={product.price}
     name={product.name}
     />
    </div>
  );
}

export default Payment;
