const express = require("express");
const morgan = require("morgan");
const app = express();
const { db, Page, User } = require('./models');
const layout = require('./views/layout')
// const seed = require('./seed')

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send(layout(""))
})

app.get('/users', async (req, res) => {

  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    console.log(`${error}`)
  }
})

const PORT = 3000;

const init = async () => {
  try {
  await db.sync({force: true})
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
} catch (error) {
  console.log(`${error}`)
}
}

init()

db.authenticate().
then(() => {
  console.log('Connected to the database');
})
