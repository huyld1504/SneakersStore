import {CustomerInformation} from '../models/register_OOP.js'

document.querySelector('.frm_register').onsubmit = (event) => {
    event.preventDefault()
    
    let customer = new CustomerInformation()
    let arrayCustomer = document.querySelectorAll('.row .col-6 .mb-4 .input_register')
    for (let index of arrayCustomer) {
        let {id,value} = index
        customer[id] = value
    }
    console.log(customer)
    
    let promise = axios ({
        url: ' https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        responseType: 'JSON',
        data: data
    })
    promise.then(function(res){
        
    })
}