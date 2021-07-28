sli();

function sli() {
  let con = document.getElementById("content");
  //console.log(con);
  let arr = [
    "Trending Now",
    "Must watch",
    "Directors Cut",
    "Fan Favorites",
    "Sci-Fi",
  ];
  var x = 0;
  setInterval(function () {
    con.innerHTML = `${arr[x]}`;
    x++;
    if (x == arr.length) {
      x = 0;
    }
  }, 2500);
}

//append movies to the movie page as soon as user logs in
/*   function app() {
  let move = document.getElementById("move");
  move.innerHTML = "";
  for (var x = 0; x < data.length; x++) {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    let Title = document.createElement("h3");
    Title.innerHTML = `Movie : ${data.Title}`;
    let rate = document.createElement("h3");
    rate.innerHTML = `IMDB rating : ${data.Rate}`;
    let release = document.createElement("h3");
    release.innerHTML = `Release : ${data.released}`;
    let url = document.createElement("img");
    url.src = `${data.poster}`;
      movies();
    div.append(title, release, rate);
    move.append(div);
  }
}
app();
 */
async function movies() {
   mov.innerHTML = null
    let movie = document.getElementById("mov").value;
   try {
     let res = await fetch(`https://www.omdbapi.com/?apikey=8d26563e&t=${movie}`)
     let data = await res.json();
     console.log('data:', data);

     if (data.Response == "False") {
       window.location.href = "gifs.html";
     }
     else {
        let div = document.createElement("div");
       div.setAttribute("class", "card");
       let title = document.createElement("h3");
       title.innerHTML = `Movie : ${data.Title}`;
       let year=document.createElement("p")
        year.innerHTML = `Year of Release:  ${data.Year}`

         let rating=document.createElement("p")
        rating.innerHTML = `Imdb Rating:  ${data.imdbRating}`
    
        let runtime=document.createElement("p")
        runtime.innerHTML = `Run time:  ${data.Runtime}`
        
        let recommend = document.createElement("h3");
        if (data.imdbRating > 8.5) {
            recommend.innerText="*Recommended*"
        } else {
            recommend.innerText = "";
        }
        let actors=document.createElement("p")
        actors.innerHTML=`Actors:  ${data.Actors}`
        let img = document.createElement("img");
        img.src=data.Poster
        div.append(recommend,img,title, year, rating, runtime, actors)
        move.append(div);
     }
   } catch (err) {
       console.log('err:', err);

     }
   
} 

function low() {
  data.sort(function (a, b) {
    return a.imdbrating - b.imdbrating;
  });
  movies();
}
function high() {
  //let data = JSON.parse(localStorage.getItem("data"));
  data.sort(function (a, b) {
    return b.imdbRating - a.imdbrating;
  });
  movies();
}
