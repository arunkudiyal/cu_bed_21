document.querySelector('#submit-btn').addEventListener('click', e => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const price = document.querySelector('#price').value
    const desc = document.querySelector('#desc').value

    if(name === '' || price === '' || desc === '') {
        alert('Please enter correct details!')
    } else {
        const createdProduct = {
            name: name,
            price: price,
            description: desc
        }
    
        console.log(createdProduct)
        const xhr = new XMLHttpRequest()
        const url = 'http://localhost:5000/products'

        xhr.open('POST', url)

        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 201) {
                console.log( JSON.parse(xhr.responseText) )
            }
        }

        xhr.send(JSON.stringify(createdProduct))
    }
} )