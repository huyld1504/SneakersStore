//Pick value from input radio 
export let  getCheckedRadioValue = (radioGroupName) => {
    var rads = document.getElementsByName(radioGroupName)
    for (let i = 0; i < rads.length; i++) 
        if (rads[i].checked) //checked value from input type radio
            return rads[i].value = true;
    return null; // or undefined, or your preferred default for none checked
}

//Function check validation from user 
export let check_space = (value, name) => {
    if (value.trim() === '') {
        document.querySelector(`.check_empty_${name}`).innerHTML = `Không được bỏ trống phần này (*)`
        return false
    } else {
        document.querySelector(`.check_empty_${name}`).innerHTML = ``
        return true
    }
}
