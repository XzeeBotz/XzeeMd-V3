/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9',
}

// Other
global.owner = ['6281381685954','6283127014833','6281365814200']
global.pemilik = ['6281381685954']
global.premium = ['6281381685954']
global.pengguna = 'Own DipaLand'
global.botnma = 'DipaLand'
global.footer = 'KahfzXzy' //FooterText Biar Di Bawah Nya Ada Text 
global.web = 'https://wa.me/+6281381685954?text=allo+banh' // Ubah Sama Lu Web Nya Bebas 
global.web2 = 'https://linktr.ee/DipaLand' //Ubah Jga Bebas Sama lu 
global.ganti = 'Author DipaLand' //Edit Terserah Lu Mau Apa
global.ganti2 = 'Linktr.ee'
global.ownernma = 'Own DipaLand'
global.packname = 'Nyolong Banh?'
global.author = 'DipaLand'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/Lycho.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
