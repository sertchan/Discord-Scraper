# Discord Server Scraper

⚠ That project uses discord.js selfbot api so the risks you take are your own.

The goal of this simple javascript project is scrapeing users profile pictures, usernames, ids, profile picture urls:

- You can scrape profile pictures on 'webp' | 'png' | 'jpg' | 'jpeg' formats.
- You can reach usernames of all users from txt.
- You could use id's from database. I wrote them.
- Feel free to open issues.

There are plenty of things that could be added to the script, feel free to contribute! 👍

### Installation

First, create your .env file using .env.example or you can just use this template:

```
GUILDID=xxxx
TOKEN=xxx
FORMAT=png
```

You will need the following javascript modules installed: chalk, chalk-animation, discord.js-selfbot-v13, dotenv, easy-json-database , follow-redirects , fs, fs-extra, gradient-string, nanospinner, uniqid.

If you have [pnpm](https://pipenv.kennethreitz.org/en/latest/) installed you can run:

```sh
$ pnpm install
```

Otherwise you can use:

```sh
$ npm install
```

### Usage

```
node . or npm start
```

### Some ScreenShots

![Console Output](https://i.imgur.com/jhEDBXv.png)
![Twitter account activity](https://i.imgur.com/mtnXdpC.png)
![pfps](https://i.imgur.com/JeVwuDG.jpeg)

## License

MIT License

If this tool has been useful for you, feel free to thank me by buying me a coffee

[![Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/sertchan)
