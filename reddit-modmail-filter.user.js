// ==UserScript==
// @name         reddit-modmail-filter
// @namespace    https://github.com/Kirzi/reddit-modmail-filter
// @version      1.0
// @description  Filters modmail from inbox
// @author       Kirzi (blackaurora)
// @match        https://*.reddit.com/message/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle ('* div[data-subreddit] { display: none; }');
