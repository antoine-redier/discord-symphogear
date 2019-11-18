"use strict";

const { episodes, beginning } = require("./variables");
const { diffDays, submitAlbum } = require("./lib");

function controller(msg) {
    if (msg.content.startsWith("&episodeToday")) {
        const nbEpisode = diffDays(beginning, Date.now());
        const episode = episodes[nbEpisode];
        msg.reply(episode);
    }
    if (msg.content.startsWith("&episodeTomorrow")) {
        const nbEpisode = diffDays(beginning, Date.now());
        const episode = episodes[nbEpisode + 1];
        msg.reply(episode);
    }
    if (msg.content.startsWith("&listCommands")) {
        msg.reply(
            `\nCommands must be prefixed with "&"\nepisodeToday -> today's episode\nepisodeTomorrow -> tomorrow 's episode\nlistCommands -> list of commands`
        );
    }
    if (msg.content.startsWith("&addAlbum")) {
        addAlbum(msg);
        msg.reply(`${album} has been added to your queue.`);
    }
    
    if (msg.content.startsWith("&episodeDate")) {
        const inputDate = new Date(msg.content.replace('&episodeDate ', ''));
        const nbEpisode = (diffDays(beginning, inputDate) % episodes.length);
        const episode = episodes[nbEpisode];
        msg.reply(`the episode for ${inputDate} is ${episode}`);
        
    }
}

module.exports = {
    controller
};