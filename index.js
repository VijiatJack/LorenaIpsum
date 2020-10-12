const {regularPhrases, startingPhrases, endingPhrases} = require('./dataset/dataset.json');

function main() {
    const phraseType = process.argv[2];
    if(!phraseType) return;

    const maxPossibilities = regularPhrases.length + !!startingPhrases.length + !!endingPhrases;

    const phrasesToPick = process.argv[3] || 1;
    let randomPhrasesSet = new Array();
    let times = 0;

    while (randomPhrasesSet.length < phrasesToPick && randomPhrasesSet.length < maxPossibilities) {
        let randomPhrase = GetRandomSet(!!randomPhrasesSet.length, randomPhrasesSet.length == phrasesToPick);

        if (!randomPhrasesSet.includes(randomPhrase))
            randomPhrasesSet.push(randomPhrase);
    }


    randomPhrasesSet.map((value) => {
        console.log(value[phraseType])
    })
    
}

function GetRandomSet(isStart, isEnd) {
    let randomNum = Math.floor(Math.random() * regularPhrases.length);

    return regularPhrases[randomNum];
}


main()