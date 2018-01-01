$(document).ready(function () {
    //Variables??
    var topics = ["Surprise","Laughter","Sad","OMG","Cmon man","Seinfeld","Curb Your Enthusiasm","Will Ferrell",
        "Dave Chappelle","Homer" ];



    //createButtons - Creates buttons via Jquery to HTML from topics array.
    function createButtons() {
        for (var i = 0; i < topics.length; i++) {
            var buttonGif = $('<button class="giphyButton" id="giphyButtonId">'+ topics[i] + '</button>');
            buttonGif.appendTo('#reactionButtons');
            jQuery(buttonGif).attr("id",topics[i].toString());
        }

        //When button clicked, takes the ID of that button and searched that within the Giphy API.
        $(".giphyButton").click(function () {

            //Giphy API

            //converts id of button clicked into a string.
            var searchGiphy = ((jQuery(this).attr('id')));
            console.log(searchGiphy);

            var xhr = "https://api.giphy.com/v1/gifs/search?q=" + searchGiphy + "&api_key=HzjdHhnihCZoCBnpSpRF4JPahUjiUMFu&limit=10";
            $.ajax( {
                method: 'GET',
                url: xhr,
            }).done(function (response) {
                var gifData = response.data;
                console.log(gifData);

                for (var i = 0; i < gifData.length; i++) {
                    var newDiv = $("<div class='col-md-4' id='giphyButtonIdTwo'>");
                    jQuery(newDiv).attr("id",gifData[i].id);

                    var aniGif = gifData[i].images.fixed_height.url;
                    var rating = gifData[i].rating;
                    var stillGif = gifData[i].images.fixed_height_still.url;
                    var displayImage = $("<img>");
                    var showRating = $("<p>").text("Rating: " + rating);

                    // displayImage.attr("src", stillGif);
                    displayImage.attr("src", aniGif);

                    newDiv.append(showRating);
                    newDiv.append(displayImage);

                    $("#reactionsObtained").append(newDiv);

                    //Grabs id of gif(element) clicked.
                };

            });

        });
    };



    //Add new giphy button to array on page from input box.
    $('#addReaction').click(function (event) {
        var newTopic = $('#reaction-input').val();
        topics = [];
        topics.push(newTopic);
        console.log(topics);
        createButtons();

    });

    createButtons();


});