$(()=>{
    let id=location.search.split("=")[1];
    const url = "https://api.themoviedb.org/3";
    let movieUrl = `${url}/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    $.get(movieUrl,(data)=>{
        $(`<div class="container">
        <img src="${imgPath + data.poster_path}" alt="Move" />
        <div>
        <h3 id="moveName">${data.title}</h3>
       <p>${data.overview}</p>
       </div>   
        </div>`).appendTo("#movieData");

    });

});