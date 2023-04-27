//Import utilities from others file
import { CustomerInformation } from '../models/register_OOP.js'
import { getCheckedRadioValue } from '../controller/method.js'
import { check_space } from '../controller/method.js'

let array_Info = []

document.querySelector('.frm_register').onsubmit = (event) => {
    event.preventDefault()
    //Create new class from class OOP 'CustomerInformation()' from file 'register_OOP.js'
    let customer = new CustomerInformation()
    customer.name = document.querySelector('#name').value
    customer.email = document.querySelector('#email').value
    customer.password = document.querySelector('#password').value
    customer.phone = document.querySelector('#password').value
    //Use function 'getCheckedRadioValue()' from file 'method.js'
    customer.gender = getCheckedRadioValue("Gender")

    // let arrayCustomer = document.querySelectorAll('.row .col-6 .mb-4 .input_register')
    // let array_Info = []
    // for (let index of arrayCustomer) {
    //     let { id, value } = index
    //     customer[id] = value
    // }
    
    console.log(customer) //Pick value input from user by Form Register
    array_Info.push(customer)
    console.log('array_Info', array_Info)


    //Check validation from users
    var validation = true
    validation = check_space(customer.email, 'email') & check_space(customer.password, 'password') & check_space(customer.name, 'name') & check_space(customer.phone, 'phone') & check_space(customer.gender, 'gender')
    if (!validation) {
        return
    }

    // let promise = axios({
    //     url: 'https://shop.cyberlearn.vn/api/Users/signup',
    //     method: 'POST',
    //     responseType: JSON,
    //     data: {
    //         "email": customer.email,
    //         "password": customer.password,
    //         "name": customer.name,
    //         "gender": customer.gender,
    //         "phone": customer.phone
    //     }
    // })
    let promise = axios.post("https://shop.cyberlearn.vn/swagger/api/Users/signup", {
        "email": customer.email,
        "password": customer.password,
        "name": customer.name,
        "gender": customer.gender,
        "phone": customer.phone
    })
    promise.then(function (result) {
        console.log('result', result.data.content)
    })
    promise.catch(function (err) {
        console.log(err)
    })
    //document.querySelector('.frm_register').reset()
}