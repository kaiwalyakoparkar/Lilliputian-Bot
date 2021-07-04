const fetch = require('node-fetch');

const replies = [
    ':smiley::smile::heart:',
    'Hello did you call me? :thinking:',
    'Let me rest a bit',
    'How may I help you?'
]

module.exports = async function(msg){
    let tokens = msg.content.split(' ');

    if(tokens[0] === 'put!hey'){

        const index = Math.floor(Math.random()* replies.length);
        msg.channel.send(replies[index]);

    }else if(tokens[0] === 'put!gif'){

        let keywords = 'hello'

        if (tokens.length > 1){
            keywords = tokens.slice(1, tokens.length).join(" ");
        }


        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
        let response = await fetch(url);
        let json = await response.json();

        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
    }
};


