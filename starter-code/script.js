$("#dest-menu > li > a").on("click", function() {
    $("#dest-menu > li").removeClass("active");
    $(this).parent().addClass("active");
    switch ($(this).attr("id")) {
        case "moon_btn":
            changeOver("Moon")
            break;
        case "mars_btn":
            changeOver("Mars")
            break;
        case "europa_btn":
            changeOver("Europa")
            break;
        case "titan_btn":
            changeOver("Titan")
            break;
        default:
            console.log("Something went wrong");
    }
})


function changeOver(planet) {
    $.ajax({
      url: "./data.json",
      dataType: 'json',
      success: function(jsonData) {
          var i = jsonData.destinations.filter(x => x.name === planet);
          $("#planet_image").attr("src", i[0].images.png)
          $("#planet_name").text(i[0].name);
          $("#description").text(i[0].description);
          $("#distance").text(i[0].distance);
          $("#travel_time").text(i[0].travel);
      }
    });
}