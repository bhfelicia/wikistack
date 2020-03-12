const { db, Page, User} = require('./models/index')

const connect = async () => {
  try {
  const user = await User.create({
    name: 'Alex',
    email: 'Alex@alex.com'
  })
  const page = await Page.create({
    title: 'Turtles',
    slug: 'slug',
    content: 'content',
    status: 'open'
  })
} catch(error) {
  console.log(`${error}`)
}
}
connect()
// const seed = connect()
// module.exports = seed;
