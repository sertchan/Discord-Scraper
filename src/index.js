import 'dotenv/config'

import { Client } from "discord.js-selfbot-v13"
import Database from "easy-json-database"
import chalkAnimation from 'chalk-animation'
import { createSpinner } from "nanospinner"
import figlet from "figlet"
import fs from 'fs'
import fsExtra from 'fs-extra'
import gradient from "gradient-string"
import https from 'https'

const client = new Client({
        checkUpdate: false,
      })
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


function download(url,hash,guild) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            res.pipe(fs.createWriteStream(`src\\${guild}\\pfp\\${hash}.${process.env.FORMAT}`))
            .on('error', reject)
            .once('close', () => resolve(`src\\${guild}\\pfp\\${hash}.${process.env.FORMAT}`))
        })
    })
}

async function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i))
        let temp = sourceArray[j]
        sourceArray[j] = sourceArray[i]
        sourceArray[i] = temp
    }
    return sourceArray
}

async function files(guild) {
    if (!fs.existsSync(`src\\${guild}`)) {
        await fs.mkdirSync(`src\\${guild}`)
    }

    if (!fs.existsSync(`src\\${guild}\\pfp`)) {
        fs.mkdirSync(`src\\${guild}\\pfp`)
    }

    if (fs.existsSync(`src\\${guild}\\pfp`)) {
        fsExtra.emptyDirSync(`src\\${guild}\\pfp`)
    }
    await fs.createWriteStream(`src\\${guild}\\username.txt`, { overwrite: false })
    await sleep(500)
    fs.truncateSync(`src\\${guild}\\username.txt`, 0)
}


async function welcome(guild) {
    let author = chalkAnimation.karaoke(`[Ready] Loggined as ${client.user.tag}\n`)
    figlet(`${guild}`, async(_err, data) => {
        console.log(gradient.pastel.multiline(data))
        await author.start()
    })
    author.stop()
}

async function scrape(guild) {
    const db = new Database(`./src/${guild}/database.json`);
    let memberid =  await shuffle((await (await client.guilds.fetch(guild)).members.fetch({limit: 0})).filter(x => x.user.id !== null && !x.user.bot).map(r => r.user.id))
    db.set('id', memberid )
    db.set('pfp_url', [])
    let l = memberid.length
    for (var i = 0; i < l; i++) {
        let member = await client.users.fetch(memberid[i])
        fs.appendFileSync(`src\\${guild}\\username.txt`, member.username + '\r\n')
        if (member.avatar) {
            let spinner = createSpinner().start()
                let pfp_url = await member.displayAvatarURL({ forceStatic: true }).replace(".webp", `.${process.env.FORMAT}`)
                db.push(`pfp_url`, pfp_url)         
                try {
                    await download(pfp_url + '?size=4096', member.avatar,guild)
                }
                catch(err) {
                    console.log(err)
                }
            spinner.success({ text: `[${((100* i) / memberid.length).toFixed(3)}%] User: ${(member.username).replace(/[\u0250-\ue007]/g, '')}#${member.discriminator}, ID: ${member.id}`})
    }
}
console.log(`${i} user succesfully scraped from ${guild} (${process.env.GUILDID}). Have a good day!`)
process.exit(0)
}

client.on('ready', async() => {
    let guild = await client.guilds.fetch(process.env.GUILDID)
    await files(guild)
    await welcome(guild)
    scrape(guild)
})


client.login(process.env.TOKEN)