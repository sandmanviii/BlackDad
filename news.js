const NewsAPI = require('newsapi');
//Removing token for git push
api_token = '';
const newsapi = new NewsAPI(api_token);
var send_back;


function callBack(updated_news){
    console.log("in Callback");
 send_back = JSON.parse(JSON.stringify(updated_news));
}

async function news(){
    console.log("function start");
    await newsapi.v2.topHeadlines ({
        language: 'en',
        country: 'us'
    }).then (async(response) => {
        console.log("In then function");
        if(response.status === "ok") {
            console.log("Preparing callback");
            await callBack(response);

        }
        
    });
    return send_back;
}
module.exports = { news };