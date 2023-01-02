const cardEl = document.getElementsByClassName('card-columns')
const postEl = document.getElementsByClassName('post-edit')

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => {

fetch('https://jsonplaceholder.typicode.com/photos')
.then((reso) => reso.json())
.then((datas) => {
    let n = 13

    for (let index = 1; index < n; index++) {
        const divEl = document.createElement('div')
        divEl.classList.add('card')
        divEl.innerHTML = `
                <div class="row">
                    <div class="col-md-5 wrapthumbnail">
                        <a href="post.html">
                            <div class="thumbnail" style="background-image: url('${datas[index].thumbnailUrl}');">
                            </div>
                        </a>
                    </div>
                    <div class="col-md-7">
                        <div class="card-block">
                            <h2 class="card-title"><a href="post.html">${data[index].title}</a></h2>
                            <h4 class="card-text">${data[index].body}</h4>
                            <div class="metafooter">
                            </div>
                        </div>
                    </div>
                </div>`
        cardEl[0].append(divEl)
        }
        const storiesEl = document.createElement('div')
        storiesEl.classList.add('col-md-8')
        storiesEl.classList.add('col-md-offset-2')
        storiesEl.classList.add('col-xs-12')
        storiesEl.innerHTML = `
            <div class="mainheading">
				<h1 class="posttitle">${data[2].title}</h1>
			</div>
			<img class="featured-image img-fluid" src="${datas[0].url}" alt="">
			<div class="article-post">
				<p>
					${data[0].body}
				</p>
				<p>
					${data[2].body}
				</p>
				<p>
					${data[3].body}
				</p>
				<blockquote>
					${data[4].body}
				</blockquote>
				<p>
					${data[5].body}
				</p>
			</div>
        `
        postEl[0].append(storiesEl)
        // for (let index = 0; index < n; index++) {
            const authorEl = document.createElement('div')
            authorEl.classList.add('authorpostbox')
            authorEl.innerHTML = `
            <div class="authorpostbox">
                        <div class="card-author">
                            <a href="author.html">
                            <img class="img-fluid img-thumb" src="${datas[4].url}" alt="">
                            </a>
                            <div class="card-block-author">
                                <h2 class="card-title-author"><a href="post.html">${data[4].body}</a></h2>
                                <h4 class="card-text-author">${data[4].body}</h4>
                            </div>
                        </div>
                    </div>`

        // }
    })

})