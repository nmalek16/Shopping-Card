document.addEventListener('DOMContentLoaded' , ()=> {
    const products = document.querySelectorAll('.card')
    products.forEach((product)=> {
        let plusButton = product.querySelector('.fa-plus-circle')
        let minusButton = product.querySelector('.fa-minus-circle')
        let heartButton = product.querySelector('.fa-heart')
        let trashButton = product.querySelector('.fa-trash-alt')
        let quantityElement = product.querySelector('.quantity')
        let totalPriceElement = document.querySelector('.total')
        
        let quantity = Number(quantityElement.textContent)


        // total
        const update =() => {
           let total =0
           products.forEach((prod) => {
            const xQuantity = Number(prod.querySelector('.quantity').textContent)
            const xunitPrice = Number(prod.querySelector('.unit-price').textContent.replace('$','').trim())
            total += xQuantity * xunitPrice 
           }); 
           totalPriceElement.textContent = `${total.toFixed(2)} $ `
        }
        //plus +
        plusButton.addEventListener('click' , ()=> {
            quantity++
            quantityElement.textContent = quantity
            update()
        })


        //minus -
        minusButton.addEventListener('click' , ()=> {
            if (quantity>0) {
                quantity--
                quantityElement.textContent = quantity
                update()
            }
        })


        // <3
        heartButton.addEventListener('click' , ()=> {
            heartButton.classList.toggle('liked')
        })


        // trash
        trashButton.addEventListener('click' , ()=> {
            product.remove()
        })
    })
})