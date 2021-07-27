const algoliasearch = require('algoliasearch');
const fetch = require('node-fetch');
const fs = require('fs');
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

const chapterTypes = ['gdg', 'dsc'];

chapterTypes.forEach(async (chapterType) => {
    const index = client.initIndex(`${chapterType}_chapters`);
    const allRegionsData = await (await fetch(`https://${chapterType}.community.dev/api/chapter_region?chapters=true`)).json();
    
    let chapters = [];
    allRegionsData.forEach(regionData => {
        Array.prototype.push.apply(chapters, regionData.chapters);
        fs.writeFile(`${chapterType}_chapters.json`, JSON.stringify(chapters, null, 1), (err) => { if(err){ console.error(err);  return;}});
    });
    chapters = chapters.map(obj => {return {objectID: obj.id, ...obj}})
    index.saveObjects(chapters, { autoGenerateObjectIDIfNotExist: true });
})