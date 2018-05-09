$(".form").hide();
/*$(".details").hide();*/

$(".available").on("click", () => {
    $(".form").hide().delay(100).fadeIn(3000);
})
$("#1").click(function(){
    $("<span> 1</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#1").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#1').removeClass('available').addClass('reserved');
        /*$("<div class = 'tableOne'></div>").appendTo("#1");
        let oneName = $("#name").val();
        $(".tableOne").append("Name: " + oneName + "<br>");
        let oneNumber = $("#number").val();
        $(".tableOne").append("Number: " + oneNumber + "<br>");
        let oneSeats = $("#seats").val();
        $(".tableOne").append("Seats: " + oneSeats + "<br>");*/
    });
});
$("#2").click(function(){
    $("<span> 2</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#2").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#2').removeClass('available').addClass('reserved');
    });
});
$("#3").click(function(){
    $("<span> 3</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#3").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#3').removeClass('available').addClass('reserved');

    });
});
$("#4").click(function(){
    $("<span> 4</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#4").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#4').removeClass('available').addClass('reserved');

    });
});
$("#5").click(function(){
    $("<span> 5</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#5").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#5').removeClass('available').addClass('reserved');

    });
});
$("#6").click(function(){
    $("<span> 6</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#6").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#6').removeClass('available').addClass('reserved');

    });
});
$("#7").click(function(){
    $("<span> 7</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#7").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#7').removeClass('available').addClass('reserved');
    });
});
$("#8").click(function(){
    $("<span> 8</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#8").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#8').removeClass('available').addClass('reserved');
    });
});
$("#9").click(function(){
    $("<span> 9</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#9").css("background-color", "blue");
        $(".form").fadeOut(3000);
        $("span").detach();
        $('#9').removeClass('available').addClass('reserved');

    });
});
$(".cancelbutton").click(function(){
    $(".form").fadeOut(1000);
});


/*function myFunction() {
    var x= text;
    var y=number;
    var z=seats;

    x = document.getElementById("name").value;
    y = document.getElementById("number").value;
    z = document.getElementById("seats").value;

    if (x!=="yahtzee" {
        text = x;
        text = y;
        text= z;
    } else {
        text ="0" ;
    }
    document.getElementById("demo").innerHTML = text;
}
myFunction();*/
