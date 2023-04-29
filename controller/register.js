//Import utilities from others file
import { CustomerInfo } from '../models/register_OOP.js'
//import { check_space } from '../controller/method.js'
import { validate } from './method.js'
let array_Info = []

document.querySelector('.frm_register').onsubmit = (event) => {
    event.preventDefault()  //prevent reloading page again

    //Create new class from class OOP 'CustomerInformation()' from file 'register_OOP.js'
    let customer = new CustomerInfo()
    customer.name = document.querySelector('#name').value 
    customer.email = document.querySelector('#email').value
    customer.password = document.querySelector('#password').value
    customer.phone = document.querySelector('#phone').value
    customer.passwordConfirm = document.querySelector('#confirm_Password').value
    customer.gender = document.querySelector('.gender_male').checked

    console.log(customer) //Pick value input from user by Form Register
    array_Info.push(customer)  
    console.log('array_Info', array_Info) //Push object into array to manage

    //Check again password is true
    if (validate()) {
        return
    } else {
        document.querySelector('.check__password').innerHTML = 'Mật khẩu không khớp !!!'
    }

    let promise = axios.post("https://shop.cyberlearn.vn/api/Users/signup", {
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
    //Check validation from users
    // var validation = true
    // validation = check_space(customer.passwordConfirm,'confirmPassword') & check_space(customer.email, 'email') & check_space(customer.password, 'password') & check_space(customer.name, 'name') & check_space(customer.phone, 'phone') & check_space(customer.gender, 'gender')
    // if (!validation) {
    //     return
    // }
    //document.querySelector('.frm_register').reset()
}

