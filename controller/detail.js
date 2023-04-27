let loadProduct = () => {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        respondType: JSON
    }).then(function(result) {
        console.log(result.data.content)
        
        var arrayProduct = result.data.content;
        var content = '';
        for(var index = 0 ; index < arrayProduct.length;index++){
            //Mỗi lần duyệt lấy ra 1 object phim
            var productSneaker = arrayProduct[index];
            content += `
            <div class="card detail_product_card mx-auto my-5" style="width:500px;height: 800px;">
            <img src="${productSneaker.image}" alt="">
            <div class="card-body">
                <h5 class="fs-3 fw-bolder detail_product_name pb-3 animate__animated animate__pulse animate__slower animate__infinite">${productSneaker.name}</h5>
                <p class="fs-4 text-black detail_product_description">${productSneaker.shortDescription}</p>
            </div>
            <hr style="border: 1px solid gray;">
            <div class="row">
                <div class="col-6 d-inline-block text-center">
                    <a href="./detail.html?productid=${index+1}">
                        <button class="btn btn-warning fs-5 py-1 fw-bold w-75">Buy now</button>
                    </a>
                </div>
                <p class="col-6 text-center fs-3 fw-bold detail_product_price">${productSneaker.price}$</p>
            </div>
        </div>
            `
        }
        document.querySelector('#list__product').innerHTML = content;
    }).catch(function(err) {
        console.log(err)
    })
    
}
loadProduct()

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search)
    const myParams = urlParams.get('productid')
    console.log('params',myParams)
}