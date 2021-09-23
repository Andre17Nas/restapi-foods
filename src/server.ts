import express from 'express';

const app = express();

app.get('/', (request, response)=>{
    response.status(200).json({
        message: 'hello world',
    })
})

app.listen('7777', ()=>{
    console.log('Server is listen on port:7777');
})