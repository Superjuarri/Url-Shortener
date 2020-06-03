const fetchUrlData = async url => {
  const urlData = await fetch('https://rel.ink/api/links/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url
    })
  })
    .then(res => res.json())
    .catch(err => err)

  return urlData
}

export default fetchUrlData
