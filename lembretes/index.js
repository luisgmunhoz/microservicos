// POST localhost:4000/lembretes {texto: "fazer café"}
// GET localhost:4000/lembretes
const express = require('express');
const app = express();

app.post('/lembretes', (req, res) => {
    
});

app.get('/lembretes', (req, res) => {
    
});

const { PORT } = process.env;
app.listen(PORT || 4000 , () => console.log(`Lembretes. Porta: ${PORT}`))