
//Function check validation from user 
export function check_space(value, name) {
    if (value.trim() === '') {
        document.querySelector(`.check_empty_${name}`).innerHTML = `Không được bỏ trống phần này (*)`
        return false
    } else {
        document.querySelector(`.check_empty_${name}`).innerHTML = ``
        return true
    }
}


