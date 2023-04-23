//Import utilities from others file
import { CustomerInformation } from '../models/register_OOP.js'
import { getCheckedRadioValue } from '../controller/method.js'
import { check_space } from '../controller/method.js'


document.querySelector('.frm_register').onsubmit = (event) => {
    event.preventDefault()
    //Create new class from class OOP 'CustomerInformation()' from file 'register_OOP.js'
    let customer = new CustomerInformation()

    //Use function 'getCheckedRadioValue()' from file 'method.js'
    customer.gender = getCheckedRadioValue("Gender")
    let arrayCustomer = document.querySelectorAll('.row .col-6 .mb-4 .input_register')
    for (let index of arrayCustomer) {
        let { id, value } = index
        customer[id] = value
    }
    console.log(customer) //Pick value input from user by Form Register

    //Check validation from users
    var validation = true
    validation = check_space(customer.email,'email') & check_space(customer.password,'password') & check_space(customer.name,'name') & check_space(customer.phone,'phone') & check_space(customer.gender,'gender')
    if (!validation) {
        return
    }

    let promise = axios ({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        //responseType: 'JSON',
        data: customer
    })
    promise.then(function(result){
        console.log(result.data)
    })
    promise.catch(function (err){
        console.log(err)
    })    
    //document.querySelector('.frm_register').reset()
}