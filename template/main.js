const cardEl = document.getElementsByClassName('card-columns')


fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => {

fetch('https://jsonplaceholder.typicode.com/photos')
.then((reso) => reso.json())
.then((datas) => {
    let n = 5
    for (let index = 0; index < n; index++) {
        const divEl = document.createElement('div')
        divEl.innerHTML = `
            <div class="card">
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
                </div>
            </div>`
        cardEl.append(divEl)
        }
    })
})