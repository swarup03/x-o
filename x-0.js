function restore() {
    $(".cell").html(" ");
}
$(document).ready(function() {
    var turn = 1;
    $(".cell").click(function() {
        if (turn == 1) {
            $(this).html("x")
            $("#status").text("Player 2 Turn");
            $("#status").css("color", "red");
            $(this).css("font-size", "30px");
            turn = 2;
        } else {
            $(this).html("o")
            $(this).css("font-size", "30px");
            $("#status").text("Player 1 Turn");
            $("#status").css("color", "red");
            turn = 1;
        }

        $(".cell").click(function() {
            if ($(this).has(html("x")) || $(this).has(html("o"))) {
                $(this).css("background-color", "green");
                setTimeout(() => {
                    $(this).css("background-color", "green");
                }, 800);
            }
        })

        // <!-- Function to check the winning move -->
        // function run() {
        //     if ($(".t1").text("x") &&
        //         $(".t2").text("x") &&
        //         $(".t3").text("x")) {
        //         $(".t1").css("color", "green");
        //         $(".t2").css("color", "green");
        //         $(".t3").css("color", "green");
        //         return true;
        //     } else if ($(".cell4").html("x") &&
        //         $(".cell5").html("x") &&
        //         $(".cell6").html("x")) {
        //         $(".cell4").css("color", "green");
        //         $(".cell5").css("color", "green");
        //         $(".cell6").css("color", "green");
        //         return true;
        //     } else if ($(".cell7").html("x") &&
        //         $(".cell8").html("x") &&
        //         $(".cell9").html("x")) {
        //         $(".cell7").css("color", "green");
        //         $(".cell8").css("color", "green");
        //         $(".cell9").css("color", "green");
        //         return true;
        //     } else if ($(".cell1").html("x") &&
        //         $(".cell4").html("x") &&
        //         $(".cell7").html("x")) {
        //         $(".cell1").css("color", "green");
        //         $(".cell4").css("color", "green");
        //         $(".cell7").css("color", "green");
        //         return true;
        //     } else if ($(".cell2").html("x") &&
        //         $(".cell5").html("x") &&
        //         $(".cell8").html("x")) {
        //         $(".cell2").css("color", "green");
        //         $(".cell5").css("color", "green");
        //         $(".cell8").css("color", "green");
        //         return true;
        //     } else if ($(".cell3").html("x") &&
        //         $(".cell6").html("x") &&
        //         $(".cell9").html("x")) {
        //         $(".cell3").css("color", "green");
        //         $(".cell6").css("color", "green");
        //         $(".cell9").css("color", "green");
        //         return true;
        //     } else if ($(".cell1").html("x") &&
        //         $(".cell5").html("x") &&
        //         $(".cell9").html("x")) {
        //         $(".cell1").css("color", "green");
        //         $(".cell5").css("color", "green");
        //         $(".cell9").css("color", "green");
        //         return true;
        //     } else if ($(".cell3").html("x") &&
        //         $(".cell5").html("x") &&
        //         $(".cell7").html("x")) {
        //         $(".cell3").css("color", "green");
        //         $(".cell5").css("color", "green");
        //         $(".cell7").css("color", "green");
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    });

});