let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw 
if (!isCreator) return
if (isBan) throw sticBanLu(from)
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT 𝐒𝐀𝐈𝐅𝐔𝐋",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM BROTHER BY 𝐒𝐀𝐈𝐅𝐔𝐋"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('sukses sendbug')
}
break

handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
handler.private = true
handler.limit = true
export default handler