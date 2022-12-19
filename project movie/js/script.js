$("#search-button").on("click", function () {
  $.ajax({
    url: "http://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "513f4a67",
      s: $("#search-input").val(),
    },
    success: function (hasil) {
      if (hasil.Response == "True") {
        let movie = hasil.Search
      
        $.each(movie, function(i, data){
          $('#movie-list').append(`
         <div class="col-md-4">
          <div class="card">
              <img src="`+data.Poster+`" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">`+ data.Title+`</h5>
              <h5 class="card-title">`+ data.Year+`</h5>
              <a href="#" class="card-link">See Detail</a>
          </div>
          </div>
          </div>
          `)
        })


        $('#search-input').val('')

      } else {
        $("movie-list").html(`
        <div class="col"> 
            <h1 class"text-center">`+ hasil.Error+` </h1>
        </div>
        `);
      }
    },
  });
});

// $("#search-button").on("click", function () {
//   $.ajax({
//     url: "http://omdbapi.com",
//     type: "get",
//     dataType: "json",
//     data: {
//       'apikey': "513f4a67",
//       's': $("#search-input").val()
//     },
//     success: function (result) {
//       console.log(result);
//       if (result.Response == "True") {
//       } else {
//         $("#movie-list").html(`div.
//         <h1 class="text-center">`+result.Error+`</h1>`);
//       }
//     },
//   });
// });
