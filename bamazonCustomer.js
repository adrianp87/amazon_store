const { createConnection } = require('mysql2')
const { prompt } = require('inquirer')

const db = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '@Warrior77',
    database: 'bamazon'
})

const [, , ...itemArr] = process.argv
const products = itemArr.join('')
console.log(products)
// connect to db
db.connect(e => {
// handle our errors
    if (e) throw e
})
// //   console.log('Successful Connection...')

//   //query all products
db.query('SELECT * FROM products', (e, r) => {
//handle errors    
    if (e) throw e
    r.forEach(({ item_id, product_name, department_name, price }) => console.log(`
    ----------
    ID: ${item_id}
    ${product_name} in ${department_name}
    $${price}
    ----------
    `))
})
    // //end process
    // const getAction = _ => {
    //     prompt({
    //         type: 'input',
    //         name: 'item_id',
    //         message: `Please enter the ID of the item you'd like to purchase.`,
    //         // choices: ['12345', '23456', '34567', '45678', '56789','67890', '78901', '89012', '90123', '9876']
    //     },
    //     prompt({
    //       type: 'input',
    //           name: 'quantity',
    //           message: 'How many would you like to buy?',
    //           choices: ['']
    //       })
    //     .then(({ action }) => {
    //         console.log(action)
      
    //     .catch(e => console.log(e))
    //     }