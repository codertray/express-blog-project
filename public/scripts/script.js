$('.btn, input[type="submit"]').on({mouseenter: function(){
    $(this).addClass("hover");
},
mouseleave: function(){
    $(this).removeClass("hover");
},
click: function(){
    $(this).addClass("pressed");
    setTimeout(function(){
        $(this).removeClass("pressed")
    }, 1000)
}}, $(this));

$(".post").on("click", function() {
    var thisPost= $(this).attr("id");
    if($("#" + thisPost).hasClass("selected")){
        $("#" + thisPost).removeClass("selected");
        $("#" + thisPost + " .edit").addClass("hidden");
    } else{
        $(".post").removeClass("selected");
        $(".edit").addClass("hidden");
        $("#" + thisPost).addClass("selected");
        $("#" + thisPost + " .edit").removeClass("hidden");
    }
});
