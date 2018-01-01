$(document).ready(function () {
    //Variables??
    var topics = ["Surprise","Laughter","Sad","OMG","Cmon man","Seinfeld","Curb Your Enthusiasm","Will Ferrell",
        "Dave Chappelle","Homer" ];

    //createButtons - Creates buttons via Jquery to HTML from topics array.
    function createButtons() {
        for (var i = 0; i < topics.length; i++) {
            var buttonId = topics[i].toString();
            var buttonGif = $('<button class="giphyButton" id="giphyButtonId">'+ topics[i] + '</button>');
            buttonGif.appendTo('#reactionButtons');
            jQuery(buttonGif).attr("id",topics[i].toString());



        }

        
        $(".giphyButton").click(function () {
            var giphyIdGrabber = ((jQuery(this).attr('id')));
            console.log(giphyIdGrabber);

            //Giphy API
            var searchGiphy = giphyIdGrabber;
            // console.log(searchGiphy);
            var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchGiphy + "&api_key=HzjdHhnihCZoCBnpSpRF4JPahUjiUMFu&limit=5");
            xhr.done(function(data) { console.log("success got data", data);

            });

        });
    };





    createButtons();





});