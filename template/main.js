let cardEl = document.getElementsByClassName('card-columns')

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json())
.then((data) => {

fetch('https://jsonplaceholder.typicode.com/photos')
.then((reso) => reso.json())
.then((datas) => {
    console.log(datas[0].thumbnailUrl)
    cardEl[0].innerHTML = `
    <div class="card">
            <div class="row">
                <div class="col-md-5 wrapthumbnail">
                    <a href="post.html">
                        <div class="thumbnail" style="background-image: url('${datas[0].thumbnailUrl}');">
                        </div>
                    </a>
                </div>
                <div class="col-md-7">
                    <div class="card-block">
                        <h2 class="card-title"><a href="post.html"></a></h2>
                        <h4 class="card-text"></h4>
                        <div class="metafooter">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    
})


}
    
)