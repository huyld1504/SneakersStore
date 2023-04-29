
//Function check validation from user 
export function check_space(value, name) {
    if (typeof value === '') {
        document.querySelector(`.check_empty_${name}`).innerHTML = `Không được bỏ trống phần này (*)`
        return false
    } else {
        document.querySelector(`.check_empty_${name}`).innerHTML = ``
        return true
    }
}

//Check confirm password and password from the form 
export let validate = () => {
    let x = document.querySelector("#password").value
    let y = document.querySelector("#confirm_Password").value
    if (x === y) {
        return true
    } else {
        return false
    }
    

}




