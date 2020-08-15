$(document).ready(function() {
    let pSize = 500
    var quotes = []

    $.get('https://raw.githubusercontent.com/izmcm/birolipsum/master/dataset/dataset.txt', function(data) {
        var lines = data.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            quotes.push(lines[i].replace(/(\r\n|\n|\r|\\n)/gm, ''))
        }    
    }, 'text');

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while(0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function generateText() {
        shuffle(quotes)

        var i = 0
        var text = ""
        var numP = $("#numP").val()
        console.log(numP)

        while(numP > 0) {
            var paragraph = ""
            while(paragraph.length < pSize) {
                paragraph += quotes[i] + " "
                i++

                if(i >= quotes.length){
                    i = 0
                    shuffle(quotes)
                }
            }
            text += paragraph + "\n\n"
            numP--
        }

        return text
    }

	$("#generate").click(function() {
        var birolipsum = generateText()
        $("#birolipsum").text(birolipsum);
        $("#copyButton").css("display", "inline");

        // Avatar changer
        const biruNode = document.getElementById("Bolsoroleta");

        let biruLista = ["biru1","biru2","biru3","biru4"]
        var rand = biruLista[Math.floor(Math.random() * biruLista.length)];
        biruNode.src = "Assets/" + rand + ".png"

        let birobiro = birolipsum.slice(0, 240);
        $('#twitterButtonContainer')
        .css('display', 'block')
        .html("<iframe id='twitterIframe' allowtransparency='true' frameborder='0' scrolling='no' src='https://platform.twitter.com/widgets/tweet_button.2d991e3dfc9abb2549972ce8b64c5d85.en.html#dnt=false&hashtags=birolipsum&id=twitter-widget-0&lang=en&original_referer=file%3A%2F%2F%2FUsers%2Fcaiogomes%2FDocuments%2Fprojects%2Fhacktoberfest%2Fbirolipsum%2Findex.html&size=m&text=" + birobiro + "...&time=1572552166093&type=share&url=https%3A%2F%2Fizmcm.github.io%2Fbirolipsum%2F'></iframe>");
        twttr.widgets.load();
    })

    $("#copyButton").click(function(){
        $("#birolipsum").select();
        document.execCommand('copy');

        alert("Texto copiado com sucesso!")
    });
});



