$("input[name='space_launch']").on("change", function () {
    let i = $(this).attr("id").slice(5, 6)
    console.log(i);
    switch (i) {
        case "1":
            changeOver(1)
            break;
        case "2":
            changeOver(2)
            break;
        case "3":
            changeOver(3)
            break;
        case "4":
            changeOver(4)
            break;

        default:
            console.log("Something went wrong");
    }
})

function changeOver(infoId) {
    $.ajax({
        url: "./data.json",
        dataType: 'json',
        success: function(jsonData) {
            var i = jsonData.technology[infoId - 1];
            $("#technology_name").text(i.name);
            $("#technology_title").text(i.description);
            $("#technology_image").attr("src", i.images.portrait);
        }
      });
}