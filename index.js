let express = require('express');
let app = express();
const Shopify = require('shopify-api-node');

const shopify = new Shopify({
    shopName: 'your-shop-name',
    apiKey: '76f4eb6798615f02a63a9a19e0f4f946',
    password: 'your-app-password'
  });

app.post('/update-product',(request,response)=>{
    try{
        const { variantId, newPrice } = request.body;
        shopify.productVariant.update(variantId, { price: newPrice });
    }catch(error){
        console.log(error);
    }
})


app.listen(8000, () => console.log('Server started on http://localhost:8000'));
