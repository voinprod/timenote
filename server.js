const express = require('express');
const path = require('path');
const item = require('./backend/routes/item');


const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/timenote')));
app.use('/api/', item );
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/timenote/index.html"))
})





const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
    console.log(`RUNNING ${PORT}`);
})