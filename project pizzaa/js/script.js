function tampilkanDataMenu() {
  $.getJSON("data/pizza.json", function (result) {

    let menu = result.menu;
    $.each(menu, function (i, result) {
      $("#daftar-menu ").append(
        '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
          result.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          result.nama +
          '</h5><p class="card-text">' +
          result.deskripsi +
          '<h5 class="card-title">' +
          result.harga +
          '<a href="#" class="btn btn-primary"> Pesan Sekarang </a></div></div></div>'
      );
    });
  });
}

tampilkanDataMenu();



$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All menu") {
    tampilkanDataMenu();
    return;
  }


  $.getJSON("data/pizza.json", function (result) {
    let menu = result.menu;
    let content = "";

    $.each(menu, function (i, result) {
      if (result.kategori == kategori.toLowerCase()) {
        content +=
          '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
          result.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          result.nama +
          '</h5><p class="card-text">' +
          result.deskripsi +
          '<h5 class="card-title">' +
          result.harga +
          '<a href="#" class="btn btn-primary"> Pesan Sekarang </a></div></div></div>';
      }
    });

    $("#daftar-menu").html(content);
  });
});
