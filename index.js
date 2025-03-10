let express = require('express');
let app = express();

app.get('/',(request,response)=>{
    response.send('Server Started');
})

app.listen(8000, () => console.log('Server started on http://localhost:8000'));
