//Create the array of beers
const beers = {
        name:['Peak beer', 
            'Chimay', 
            'Val-Dieu', 
            'Leffe', 
            'Stella Artois', 
            'Rochefort', 
            'Carolus', 
            'Elfique', 
            'Liefmans', 
            'Hoegaarden', 
            'Curtius'],
        type: ['winter',
            'blue',
            'Grand-Cru',
            'blonde',
            'pilsner',
            'triple',
            'whisky infused',
            'IPA',
            'pécheresse',
            'blonde',
            'blonde'],
        alcohol: ['9%',
                '9%',
                '10.5%',
                '6.6%',
                '5.2%',
                '8.1%',
                '11.7%',
                '6%',
                '2.5%',
                '4.9%',
                '7%'],
        website: ['https://peakbeer.be/fr/accueil',
                'https://chimay.com/',
                'https://www.val-dieu.com/',
                'https://leffe.com/',
                'https://www.stellaartois.com/fr_be/labiere/',
                'http://www.abbaye-rochefort.be/index.php?option=com_content&view=article&id=88&lang=fr',
                'https://www.hetanker.be/',
                'https://www.elfique.be/',
                'https://www.liefmans.com/',
                'https://www.bierebel.com/bieres-belges/hoegaarden',
                'http://www.lacurtius.com/']
}

//Create array for appreciations
const appreciations = ['I really love this one!',
                    "Please, next time don't give me advices...",
                    'It is the best beer I have ever tried!',
                    'I am not a fan, but I can understand why people like it!',
                    'Yummy!!']

//Create the function that will generate the message
const generateMessage = (beers) => {
    let randomNumber = Math.floor(Math.random() * (beers.name.length))
    return `- You should try the ${beers.name[randomNumber]} ${beers.type[randomNumber]}. This ${beers.alcohol[randomNumber]} strong Belgian beer is one of the best ones out there!
Learn more about it here: ${beers.website[randomNumber]}.
Let me know what you think!`
}

//Create function that will log appreciation to the console
const generateApp = (appreciations) => {
    let randomApp = Math.floor(Math.random() * (appreciations.length))
    return `- ${appreciations[randomApp]}`
}

//Log function on the console
console.log('- I am currently in Belgium, which beer should I try ?')
console.log(generateMessage(beers))
console.log(generateApp(appreciations))
