var index = 0;

$(function() {
    $("#setup, #punchline, #voting, #votes-container").hide();

    $("#getJoke").click(
        function() {
            $("#setup, #punchline, #voting, #votes-container").show();

            $.get("/jokes",function(data){
                $("#setup").html(data.setup);
                $("#punchline").html(data.punchline);

                index = data.id;


            },"json")
        }
    );

    $("#upvote").on("click", function() {
        // $.post("/upvote");
        $.ajax({
            url: '/upvote',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ id: index }),

            success: function(data, status, xhr) {
                $("#votes").html(data.votes);

                
            }
        });
    });

    $("#downvote").on("click", function() {
        // $.post("/downvote");
        $.ajax({
            url: '/downvote',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ id: index }),

            success: function(data, status, xhr) {
                $("#votes").html(data.votes);

               
            }
        });
    });

  