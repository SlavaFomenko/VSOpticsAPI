const express = require('express');
const cors = require('cors');
const categoryRoutes = require('./routes/category')


const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static('public'));

app.use('/categories',categoryRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
