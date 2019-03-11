var currentPage = 1;

function goToNextPage() {
    document.getElementById('page' + currentPage).style.display = 'none';
    currentPage++;
    
    document.getElementById('page' + currentPage).style.display = 'block';

    if(currentPage == 5){
        createSymbols();
    }
}

function createSymbols() {
    let arrSymbol = shuffleArray(["&", "^", "%", "$", "#", "@", "!", "*", "?"]);
    var str = "";
    var obj = document.getElementById("symbolsHere");
    console.log(arrSymbol);

    var k = 0;
    for(let i = 0; i <= 10; i++)
    {
        for(let j=0; j <arrSymbol.length; j++)
        {

            str += "<div class='row'>" + k + " - " + arrSymbol[j] + "</div>";
            k++;
        }
    }
    str += "<div class='row'>" + k + " - " + arrSymbol[0] + "</div>";

    console.log(str);
    obj.innerHTML = str;

    document.getElementById('answer').innerHTML = arrSymbol[0];
    document.getElementById('answerText').innerHTML = "Your symbol is " + arrSymbol[0];  

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}