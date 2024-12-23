const express = require('express');
const bodyParser = require('body-parser');
const port=3001
const app = express();
app.use(bodyParser.json());
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello, World!')
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});