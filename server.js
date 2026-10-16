const express = require('express');
const app = express();

app.use(express.static("public"));

// Start the web server
app.listen(3000, function() {
   console.log("Listening on port 3000...");
});

/*
TODO BASIC EXPRESS STUFF
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/style.css', (req, res) => {
    res.sendFile('style.css', { root: __dirname });
});

app.listen(process.env.PORT || 3000);

*/