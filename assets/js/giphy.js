$(document).ready(function () {
    //Variables??



    var topics = ["Surprise","Laughter","Sad","OMG","Cmon man","Seinfeld","Curb Your Enthusiasm","Will Ferrell",
        "Dave Chappelle","Homer" ];


    //createButtons - Creates buttons via Jquery to HTML from topics array.
    function createButtons() {

        for (var i = 0; i < topics.length; i++) {
            var buttons = $('<button id="giphyButton">'+ topics[i] + '</button>')
            buttons.appendTo('#reactionButtons');

            //Giphy API
            var searchGiphy = topics[i].toString();
            console.log(searchGiphy);
            var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchGiphy + "&api_key=HzjdHhnihCZoCBnpSpRF4JPahUjiUMFu&limit=10");
            xhr.done(function(data) { console.log("success got data", data); });
            // console.log(xhr);

        }



        $('#reactionButtons').click(function () {

            if(this.id == 'reactionButtons') {
                // alert('test successful');
                // $.ajax({
                //     url: xhr,
                //     method: "GET"
                // }).done(function (response) {
                //     var reactResponse = response.data;
                //     console.log(reactResponse);
                // });

                console.log(xhr);

            };
        });

    };



    createButtons();





});