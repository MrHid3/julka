import { viteRequire } from 'vite-require'
export default {
    plugins: [
        viteRequire(/* options */)
    ]
}

const wordnet = require("en-wordnet").default;
const Dictionary = require("en-dictionary");

const start = async () => {
    const dictionary = new Dictionary(wordnet.get("3.0"));
    await dictionary.init();

    let result = dictionary.searchFor(["yet"]);
    console.log(result);

    result = dictionary.searchFor(["preposterous"]);
    console.log(result.get("preposterous").get("adjective"));
    console.log(JSON.stringify(result.get("preposterous").get("adjective"), null, '\t'));

    result = dictionary.searchSimpleFor(["preposterous"]);
    console.log(result);

    result = dictionary.wordsStartingWith("prestig");
    console.log(result)

    result = dictionary.wordsEndingWith("sterous");
    console.log(result)

    result = dictionary.wordsIncluding("grating");
    console.log(result);

    result = dictionary.wordsWithCharsIn("toaddndyrnrtssknwfsaregte");
    console.log(result)

    result = dictionary.wordsUsingAllCharactersFrom("indonesia");
    console.log(result);
};

await start()

export {}