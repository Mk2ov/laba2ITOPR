const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Статичні файли
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/autobiography.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
