(function(){
  // get input form and add submit event
  const productForm = document.forms.namedItem('product-form')
  productForm.addEventListener('submit', postSubmitEvent)
  
  function postSubmitEvent (event) {
    event.preventDefault()
    const data = new FormData(productForm)
    
    postForm({uri:'/admin/product', data:data}, (res) => {
      console.log(res)
    })
  }

})()
