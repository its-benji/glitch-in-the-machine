const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Tests stuff locally before deploying
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
// app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})