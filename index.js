$(document).ready(function() {
    let pSize = 500
    var quotes = []

    $.get('https://raw.githubusercontent.com/izmcm/birolipsum/master/dataset.txt', function(data) {
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
        var numP = $(".numP").val()
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

	$(".generate").click(function(){
        var birolipsum = generateText()
        $(".birolipsum").val(birolipsum);
    })
})