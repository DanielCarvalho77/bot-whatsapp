const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    // const userNumber = '554688202581';
    // const chatId = `${userNumber}@c.us`; // Adiciona o formato correto
    // const message = 'Você é meu bombomzinho weeeeeeeeeeeee';
    
    // client.sendMessage(chatId, message);
});


client.on('message_create', async message => {
    let resposta = 
    `O quanto você acha que eu te amo?
    1 - 100 milhões
    2 - 500 milhões
    3 - 1 bilhão
    4 - 50 bilhões`

	if (message.body === 'amor' || message.body === 'Amor') {
        await client.sendMessage(message.from, resposta);
    }

    if (message.body === "1") {
        await client.sendMessage(message.from, 'ACERTOU TE AMU');
    }

    if (message.body === "2") {
        await client.sendMessage(message.from, 'QUASE ACERTOU ');
    }

    if (message.body === "3") {
        await client.sendMessage(message.from, 'Errou, melhore ');
    }

    if (message.body === "4") {
        await client.sendMessage(message.from, 'VOCÊ É MINHA QUERIDA ');
    }

});

client.initialize();
