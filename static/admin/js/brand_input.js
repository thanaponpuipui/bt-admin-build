(function () {
  const brandForm = document.forms.namedItem('brand-form')
  brandForm.addEventListener('submit', brandSubmit)
  
  function brandSubmit (event) {
    event.preventDefault()
    const brandFormData = new FormData(brandForm)
    postForm({data: brandFormData, uri: '/admin/brand'}, res => {
      console.log(res)
    })
  }
})()
