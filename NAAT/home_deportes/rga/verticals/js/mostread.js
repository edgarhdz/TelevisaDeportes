;(function() {
    $(document).ready(function() {
        var button = $(".menu");
        var selectedButton = $(".selected");

        
        button.bind("click", function(){
            toggleSelect(this);
        });

        function toggleSelect(pressedButton){
            if($(pressedButton).hasClass("selected") === false){
                selectedButton.removeClass("selected");
                $(pressedButton).addClass("selected");
                selectedButton = $(pressedButton);
            }
        }
    });
}());