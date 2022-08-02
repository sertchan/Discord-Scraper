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
import uniqid from 'uniqid'

const client = new Client({
        checkUpdate: false,
      })
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


function download(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            res.pipe(fs.createWriteStream(`src\\pfp\\${process.env.GUILDID}\\${uniqid()}.${process.env.FORMAT}`))
            .on('error', reject)
            .once('close', () => resolve(`src\\pfp\\${process.env.GUILDID}\\${uniqid()}.${process.env.FORMAT}`))
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

async function files() {
    if (!fs.existsSync(`src\\database`)) {
        await fs.mkdirSync(`src\\database`)
    }

    if (!fs.existsSync(`src\\database\\${process.env.GUILDID}`)) {
     fs.mkdirSync(`src\\database\\${process.env.GUILDID}`)
    }

    if (!fs.existsSync(`src\\username`)) {
        await fs.mkdirSync(`src\\username`)
    }

    if (!fs.existsSync(`src\\username\\${process.env.GUILDID}`)) {
       await fs.mkdirSync(`src\\username\\${process.env.GUILDID}`)
    }

    if (!fs.existsSync(`src\\pfp`)) {
       await fs.mkdirSync(`src\\pfp`)
    }

    if (!fs.existsSync(`src\\pfp\\${process.env.GUILDID}`)) {
        fs.mkdirSync(`src\\pfp\\${process.env.GUILDID}`)
    }

    if (fs.existsSync(`src\\pfp\\${process.env.GUILDID}`)) {
        fsExtra.emptyDirSync(`src\\pfp\\${process.env.GUILDID}`)
    }
    await fs.createWriteStream(`src\\username\\${process.env.GUILDID}\\username.txt`, { overwrite: false })
    await sleep(500)
    fs.truncateSync(`src\\username\\${process.env.GUILDID}\\username.txt`, 0)
}


async function welcome() {
    let author = chalkAnimation.karaoke(`[Ready] Loggined as ${client.user.tag}\n`)
    figlet(`Discord Server Scraper`, async(_err, data) => {
        console.log(gradient.pastel.multiline(data))
        await author.start()
    })
    await sleep(2500)
    author.stop()
}

async function scrape() {
    const db = new Database(`./src/database/${process.env.GUILDID}/database.json`)
    let memberid =  await shuffle((await (await client.guilds.fetch(process.env.GUILDID)).members.fetch({limit: 0})).filter(x => x.user.id !== null && !x.user.bot).map(r => r.user.id))
    db.set('id', memberid )
    db.set('url', [])
    let l = memberid.length
    for (let i = 0; i < l; i++) {
        let spinner = createSpinner("Scraping...").start()
        let member = await client.users.fetch(memberid[i])
        let url = await member.displayAvatarURL({ forceStatic: true }).replace(".webp", `.${process.env.FORMAT}`)
        fs.appendFileSync(`src\\username\\${process.env.GUILDID}\\username.txt`, member.username + '\r\n')
        if (!url.includes('embed')) {
            db.push(`url`, url)         
            try {
                await download(url + '?size=4096')
            }
            catch(err) {
                console.log(err)
            }
            spinner.success({ text: ` %${((100* i) / memberid.length).toFixed(3) } >> ${(member.username).replace(/[\u0250-\ue007]/g, '')}` })
        }
    }
    console.log('finished.')
    process.exit(0)
}

client.on('ready', async() => {
    await files()
    await welcome()
    scrape()
})


client.login(process.env.TOKEN)