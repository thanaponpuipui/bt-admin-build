const SERVER_URL = 'http://localhost:8080'

function postJson ({data, uri}, cb) {
  if (!uri) {
    throw new Error('fetch missing uri.')
  }

  return fetch(SERVER_URL + uri, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data)
  })
   .then(res => res.json())
   .then(json => cb(json))
   .catch(error => console.error(error))
}

function postForm ({data, uri}, cb) {
  if (!uri) {
    throw new Error('fetch messing uri.')
  }

  return fetch(SERVER_URL + uri, {
    method: 'POST',
    body: data
  })
   .then(res => res.json())
   .then(json => cb(json))
   .catch(error => console.error(error))
}

(function(){
  // disabled link none click.
  const disLink = document.getElementsByClassName('disabled')
  for (let i = 0; i < disLink.length; i++) {
    disLink[i].addEventListener('click', event => {
      event.preventDefault()
    })
  }
})()

