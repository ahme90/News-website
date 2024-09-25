    // Fetch data from News API when search button is clicked
        document.getElementById("go").addEventListener("click", function(){
    var city= document.getElementById("search").value;
    fetch(" https://newsapi.org/v2/everything?q="+city+"&apiKey=5656a9f405e94de08b65fc90f3a21364")
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("auth").innerHTML = data.articles[1].author;
        document.getElementById("b").innerHTML = data.articles[1].title;
        document.getElementById("c").innerHTML = data.articles[1].description;
        document.getElementById("d").innerHTML = data.articles[1].content;
        document.getElementById("e").src = data.articles[1].urlToImage;

        document.getElementById("auth2").innerHTML = data.articles[2].author;
        document.getElementById("b2").innerHTML = data.articles[2].title;
        document.getElementById("c2").innerHTML = data.articles[2].description;
        document.getElementById("d2").innerHTML = data.articles[2].content;
        document.getElementById("e2").src = data.articles[2].urlToImage;

        })
})
    