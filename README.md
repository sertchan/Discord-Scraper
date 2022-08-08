# ✨ Discord Guild Scraper ✨

⭐ Dont Forget to give project a star! For helping people who needs this tool!

🔥 If this tool has been useful for you and saved your day, please feel free to thank me by buying me a coffee!

[![Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/sertchan)

⚠️ This project uses discord.js selfbot api so the risks you take are your own.

🎌 The goal of the project is scraping users in specifed guild. Scrapes pfp's, usernames, ids, pfp url's. 

💗 I'm already so so much appreciated who gives star the project or supports me on buy me a coffe! 

-  You can scrape profile pictures on 'webp' | 'png' | 'jpg' | 'jpeg' formats.
-  You can reach usernames of all users from txt.
-  You could use id's from json database.
-  Bot creates specific folders for guilds so it is really easy to handle.
-  I used local json database for safety accessibility.
-  It is not possiable to rewrite this project with using discord res api due restrictions. 

😶‍🌫️ I added all of thing could scaraped as an normal user on api. Scraping banners. Bio's etc. as a normal user does not allowed in discord.js api. Thanks for patience.

👍 There are plenty of things that could be added to the script, feel free to contribute! 

### Installation

😔 We currently cannot support bun because bun.js does not support node http/https api which is used in discord-selfbot-v13.

First, create your .env file using .env.example (rename it to .env). If you wont do it causes token error.

```
GUILDID=xxxx
TOKEN=xxx
FORMAT=png
```

🎀 You will install that npm modules: chalk, chalk-animation, discord.js-selfbot-v13, dotenv, easy-json-database , fs, fs-extra, gradient-string, nanospinner, uniqid.

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
node . or node ./src/index.js
```

### 😎 Some Screenshots from the project 

![Console Output](https://cdn.discordapp.com/attachments/1001955561274876057/1004373037891723264/unknown.png)
![Twitter account activity](https://cdn.discordapp.com/attachments/1001955561274876057/1004372701714071593/unknown.png)
![pfps](https://cdn.discordapp.com/attachments/1001955561274876057/1004373286467154021/unknown.png)

## License

MIT License 💖

