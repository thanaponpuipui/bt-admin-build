(function(){
  const typeForm = document.forms.namedItem('st-input')
  const categoryForm = document.forms.namedItem('cat-input')

  typeForm.addEventListener('submit', submitType)
  categoryForm.addEventListener('submit', submitCategory)

  function submitType (event) {
    event.preventDefault()

    const typeFormData = new FormData(typeForm)
    // shoeType section input.
    const shoeTypeInput = typeFormData.get('shoeType')
    const stThaiInput = typeFormData.get('shoeTypeThai')
    // value of checked check box.
    const categoryInType = typeFormData.getAll('category')

    const jsonData = {
      shoeType: shoeTypeInput,
      shoeType_thai: stThaiInput,
      category: categoryInType
    }

    postJson({data:jsonData, uri:'/admin/shoe-type'}, (res) => {
      console.log(res)
    })
  }

  function submitCategory (event) {
    event.preventDefault()
    // category section input.
    const categoryFormData = new FormData(categoryForm)
    const categoryInput = categoryFormData.get('category')
    const cateThaiInput = categoryFormData.get('categoryThai')

    const jsonData = {
      category: categoryInput,
      category_thai: cateThaiInput
    }

    postJson({uri: '/admin/category', data: jsonData}, (res) => {
      console.log(res)
    })
  }

})()
