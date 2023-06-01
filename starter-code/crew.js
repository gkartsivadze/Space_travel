$("input[name='crew_meet']").on("change", function () {
    let i = $(this).attr("id").slice(4, 5)
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

function changeOver(crewId) {
    $.ajax({
        url: "./data.json",
        dataType: 'json',
        success: function(jsonData) {
            var i = jsonData.crew[crewId - 1];
            $("#name-last").text(i.name);
            $("#crew-bio").text(i.bio);
            $("#position").text(i.role);
            $("#crew-img").attr("src", i.images.png);
        }
      });
}