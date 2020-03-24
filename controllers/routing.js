const fetch = require("node-fetch");
const clientIdArray = ["c0g3KCdeYfIgY-AqI1Wc_mxsO4n1fCwTrNUFAtkuoOs", 'MzgjHArhWPqMzWaRBzbGVYvwGfko5Dq2C8xkNkaxb8k', 'XiE0S0hgNEIQoNQMzxWFgjfi8LUN6zasz6xLmolFJUQ', 'veo6OymYIOKetTx63Mop7wENnxdMJlDWhwMD3HCnysE', 'kKSTynEwDSyQGAfrsk4Um0X-8MWLd1qx0ZLj2MVdEV0']
const clientId = clientIdArray[Math.floor(Math.random() * clientIdArray.length + 1)]
let homeQuery = 'beach'

function getImages(req, res) {
	fetch(
		`https://api.unsplash.com/search/photos?page=1&query=${homeQuery}&client_id=${clientId}`
	)
		.then(res => res.json())
		.then(body => {
			console.log(body)
			res.render("index", {
				title: "Unsplash img finder",
                heading: "hello",
                query: true,
				data: body
			});
		});
}

function getDetail(req, res) {
	fetch(
		`https://api.unsplash.com/photos/${req.params.id}?client_id=${clientId}`
	)
		.then(res => res.json())
		.then(body => {
			res.render("detail", {
				title: body.description,
				heading: body.description,
				data: {
					img: body.urls.regular,
					download: body.links.download,
					likes: body.likes,
					user: body.user.username,
					firstName: body.user.first_name,
					lastName: body.user.last_name,
					portfolio: body.user.portfolio_url,
					profileImg: body.user.profile_image.large,
					related: body.related_collections.results,
					views: body.views,
					bio: body.user.bio,
					twitter: body.user.twitter_username,
					instagram: body.user.instagram_username
				}
			});
		});
}

function getPreviousPage(req, res, next) {
	res.redirect("/")
}

async function getResults(req, res) {
	if (req.body.search) {
		homeQuery = req.body.search
		console.log(homeQuery)
		fetch(`https://api.unsplash.com/search/photos?page=1&query=${req.body.search}&client_id=${clientId}`)
			.then(res => res.json())
			.then(body => {
				res.render("index", {
					title: "Unsplash img finder",
                    heading: "hello",
                    query: true,
					data: body
				})
			})
	} else {
        res.render("index", {
            title: "Unsplash img finder",
            heading: "No results found",
            query: false,
            data: []
        })
    }
}

const getRandomImg = async () => {
    let randomArr = []
    for (let index = 0; index < 10; index++) {
        await fetch(`https://api.unsplash.com/photos/random?client_id=${clientId}`)
            .then(res => res.json())
            .then(body => {
            randomArr.push(body)
            })
            .catch(err => console.log(err))
    }
    return randomArr
}

module.exports = {
	getImages,
	getDetail,
	getPreviousPage,
	getResults
};
