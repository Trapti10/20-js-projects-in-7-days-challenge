const btns = document.querySelectorAll(".tab-btn")
const articles = document.querySelectorAll(".content")
const about  = document.querySelector(".about")

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            //remove active from other button
            btn.classList.remove('active');
            e.target.classList.add('active')
        });
    }
    //hide other articles
    articles.forEach(function(article){
           article.classList.remove('active');

    })
    // show the matching article
    const element = document.getElementById(id);
    element.classList.add('active');
})