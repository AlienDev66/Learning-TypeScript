import express from 'express';

const app = express();

app.get('/', (request,response) =>{
    return response.send('Hello Word 2');
})


app.listen(3333);