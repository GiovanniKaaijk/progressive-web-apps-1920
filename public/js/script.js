const clientIdArray = ["c0g3KCdeYfIgY-AqI1Wc_mxsO4n1fCwTrNUFAtkuoOs", 'MzgjHArhWPqMzWaRBzbGVYvwGfko5Dq2C8xkNkaxb8k', 'XiE0S0hgNEIQoNQMzxWFgjfi8LUN6zasz6xLmolFJUQ', 'veo6OymYIOKetTx63Mop7wENnxdMJlDWhwMD3HCnysE', 'kKSTynEwDSyQGAfrsk4Um0X-8MWLd1qx0ZLj2MVdEV0']
const clientId = clientIdArray[Math.floor(Math.random() * clientIdArray.length + 1)]

const input = document.querySelector('form.search input')
let toggle = true;

input.addEventListener('input', function() {
    if(input.value.length > 1) {
        if(toggle) {
            toggle = false
            fetch(`https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=${clientId}`)
            .then(res => res.json())
            .then(res => {
                const el = document.querySelector('.grid')
                if(res.results) {
                    const articles = document.querySelectorAll('.grid .img-wrapper')
                    articles.forEach(article => {
                        article.remove()
                    })
                    res.results.forEach((item, i) => {
                        const html = `<div class="img-wrapper"><a href="${item.id}"><img src=${item.urls.regular}></a></div>`
                        el.insertAdjacentHTML("beforeend", html)
                    })
                }
                toggle = true
            })
        }
    }
})