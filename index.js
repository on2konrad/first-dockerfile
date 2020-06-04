const express            = require('express');
const PORT = 3000;

// Initialize the App
const app = express();
app.use(express.static('public')); // Static folder

app.get('/', (req, res) => {
  res.send("<h1>Olá Docker!</h1>");
})

const server = app.listen(PORT, () => {
   console.log(`CALCULATOR RUNNING ON PORT: ${PORT}`);
});