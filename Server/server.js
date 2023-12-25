const app = require('./middlewares');
const env = require('./config/env.js');
const mongoose = require('mongoose');
const routes = require('./routes')

app.use("/api", routes)



app.get('*', (req, res) =>
{
    if (process.env.NODE_ENV === 'production') {
        return res.sendFile(__dirname + '/dist/index.html');
    }
    res.send('404 page not found');
})
mongoose.connect(env.MONGO_LINK)
    .then(() => { console.log('database connected'); })
    .catch((err) => { console.error('Error connecting to the database:', err); });
app.listen(env.PORT, () => { console.log(`Server is running on http://localhost:${env.PORT}`); });