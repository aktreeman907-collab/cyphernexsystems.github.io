function payNow(sku, title, price){
  if(window.PAYPAL_CLIENT_ID){
    alert('PayPal Smart Buttons placeholder. Insert production script with your client ID.');
    // After real payment, redirect to thank-you
    // location.href = '/thank-you.html?sku='+encodeURIComponent(sku);
    return;
  }
  const cart = JSON.parse(localStorage.getItem('cc_cart')||'[]');
  cart.push({sku,title,price,qty:1});
  localStorage.setItem('cc_cart', JSON.stringify(cart));
  location.href = '/thank-you.html?sku='+encodeURIComponent(sku);
}