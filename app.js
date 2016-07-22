$(function() {
// code for clicking button .etc

    $("#getJoke").click(
        function() {
            $.get("/jokes",function(data){
                // TODO:
              
                   $("#setup").html(data.setup);
                   $("#punchline").html(data.punchline);
            },"json")
        }
    );
});