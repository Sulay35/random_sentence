var determinantsList = [
    'a',
    'an'
];

function randomFromInt(min, max){
    return Math.round(Math.random() * (max - min) ) + min; 
}

function isAnVowel(letter){
    if( letter == 'a' ||
        letter == 'o' ||
        letter == 'i' ||
        letter == 'e' ||
        letter == 'u' 
        ){
        return true;
        }
    else {
        return false;
    }
}

function generateSentence(){
    var x = 0;
    var sentence = '';
    var adject = adjectives[randomFromInt(0,adjectives.length-1)];
    var noun = nouns[randomFromInt(0, nouns.length-1)];
    var deter;
    if(isAnVowel(adject[0])){
        deter = determinantsList[1];
    }else{
        deter = determinantsList[0];
    }
    sentence = deter + ' ' + adject + ' ' + noun ;
    
    console.log(sentence);
    var sentences = [];
    sentences.push(sentence);
    document.getElementById('text').innerText = sentence;
    for(var i = 0; i< sentences.length; i++){
        var newLis = document.createElement('li');
        var newContent = document.createTextNode(sentence);

        newLis.appendChild(newContent);
        document.body.insertBefore(newLis, div1);
    }
}
generateSentence();
