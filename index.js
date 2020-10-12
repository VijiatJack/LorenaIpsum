const {regularPhrases, startingPhrases, endingPhrases} = require('./dataset/dataset.json');

function main() {
    const phraseType = process.argv[2];
    if(!phraseType) {
        console.error("ERROR: Missing Phrase Type Argument.\n(0) => Lorena-English\n(1) => English\n(2) => Portuguese\n\n\tExample: npm start 1\n\n** Optional secondary argument # of phrases **");
        return;
    }

    const maxPossibilities = regularPhrases.length + !!startingPhrases + !!endingPhrases - 1;
    console.log('maxPossibilities', maxPossibilities);

    const phrasesToPick = process.argv[3] || 1;
    let randomPhrasesSet = new Array();
    let times = 0;

    while (randomPhrasesSet.length < phrasesToPick && randomPhrasesSet.length < maxPossibilities) {
        let randomPhrase = GetRandomSet(!randomPhrasesSet.length, randomPhrasesSet.length == phrasesToPick - 1);

        if (!randomPhrasesSet.includes(randomPhrase))
            randomPhrasesSet.push(randomPhrase);
    }


    randomPhrasesSet.map((value) => {
        console.log(value[phraseType])
    })
    
}

function GetRandomSet(isStart, isEnd) {
    let datasets = [startingPhrases, regularPhrases, endingPhrases];
    let currentDataset = isStart ? 0 : isEnd ? 2 : 1;
    console.log("Current Dataset:", currentDataset);
    let dataset = datasets[currentDataset];
    let randomNum = Math.floor(Math.random() * dataset.length);

    return dataset[randomNum];
}


main()