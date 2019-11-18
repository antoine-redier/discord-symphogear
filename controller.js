"use strict";

const { episodes, beginning } = require("./variables");
const { diffDays, submitAlbum, getEpisodeDate } = require("./lib");

function controller(msg) {
    if (msg.content.includes("&episodeToday")) {
        let nbEpisode = diffDays(beginning, Date.now());
        let episode = episodes[nbEpisode];
        msg.reply(episode);
    }
    if (msg.content.includes("&episodeTomorrow")) {
        let nbEpisode = diffDays(beginning, Date.now());
        let episode = episodes[nbEpisode + 1];
        msg.reply(episode);
    }
    if (msg.content.includes("&listCommands")) {
        msg.reply(
            `\nCommands must be prefixed with "&"\nepisodeToday -> today's episode\nepisodeTomorrow -> tomorrow 's episode\nlistCommands -> list of commands`
        );
    }
    if (msg.content.includes("&addAlbum")) {
        addAlbum(msg);
        msg.reply(`${album} has been added to your queue.`);
    }
    /**
     * 
    if (msg.content.includes("&episodeDate")) {
        getEpisodeDate(msg);
        msg.reply(`The episode for ${inputDate} will be : ${episode}`);
    }
    */
}

module.exports = {
    controller
};