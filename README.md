# Discord Server Scraper

⭐ Dont Forget to give project a star! For helping people who needs this tool!

🔥 If this tool has been useful for you, feel free to thank me by buying me a coffee (Filter coffee and Espresso especially) :D 

[![Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/sertchan)

⚠️ This project uses discord.js selfbot api so the risks you take are your own.

✨ The goal of this simple javascript project is scraping users in specifed guild profile pictures, usernames, ids, profile picture urls ✨

- You can scrape profile pictures on 'webp' | 'png' | 'jpg' | 'jpeg' formats.
- You can reach usernames of all users from txt.
- You could use id's from database. I wrote them.
- Feel free to open issues.

There are plenty of things that could be added to the script, feel free to contribute! 👍🏽

### Installation

😔 We currently cannot support bun because bun does not support node http api which is used in discord-selfbot-v13

First, create your .env file using .env.example (rename it to .env). If you wont do it causes token error

```
GUILDID=xxxx
TOKEN=xxx
FORMAT=png
```

You will need the following javascript modules installed: chalk, chalk-animation, discord.js-selfbot-v13, dotenv, easy-json-database , follow-redirects , fs, fs-extra, gradient-string, nanospinner, uniqid.

If you have [pnpm](https://pnpm.io/) installed you can run:

```sh
$ pnpm install
```

Otherwise you can use:

```sh
$ npm install
```

### Simple Usage

```
node . 
```

### 😎 Some Screenshots from the project 

![Console Output](https://cdn.discordapp.com/attachments/1001955561274876057/1004373037891723264/unknown.png)
![Twitter account activity](https://cdn.discordapp.com/attachments/1001955561274876057/1004372701714071593/unknown.png)
![pfps](https://cdn.discordapp.com/attachments/1001955561274876057/1004373286467154021/unknown.png)

## License

MIT License

