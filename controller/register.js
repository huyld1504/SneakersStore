//Import utilities from others file
import { CustomerInfo } from '../models/register_OOP.js'
//import { hasWhiteSpace } from '../controller/method.js'
import { validate } from './method.js'
import { telephoneCheck } from './method.js'
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

    if (customer.name !== "") {
        document.querySelector('.check__name').innerHTML = 'Vui lòng nhập lại họ và tên !!!'
    }

    //Check validation from users
    var validation = true
    validation = telephoneCheck(customer.phone) & validate() 
    if (!validation === true) {
        document.querySelector('.check__password').innerHTML = 'Mật khẩu không khớp !!!'
    } else {
        //Request API
    let promise = axios.post("https://shop.cyberlearn.vn/api/Users/signup", {
        "email": customer.email,
        "password": customer.password,
        "name": customer.name,
        "gender": customer.gender,
        "phone": customer.phone
    })
    promise.then(function (result) {
        console.log('result', result.data.content)
        alert('Chúc mừng bạn đã đăng kí thành công')
        document.querySelector('.frm_register').reset()
    })
    promise.catch(function (err) {
        console.log(err)
        alert('Tài khoản đăng kí của bạn đã không đúng, vui lòng đăng kí lại')
    })
    }

    
    
    


    // validation = check_space(customer.passwordConfirm,'confirmPassword') & check_space(customer.email, 'email') & check_space(customer.password, 'password') & check_space(customer.name, 'name') & check_space(customer.phone, 'phone') & check_space(customer.gender, 'gender')
    // if (!validation) {
    //     return
    // }

}

