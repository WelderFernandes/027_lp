import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface data {
    senderMail: string,
    nome: string,
    telefone: string,
    texto: string
}

const email = 'contato@zero27code.com.br';
const emailpass = process.env.MAILPASS;

const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    auth: {
        user: 'contato@zero27code.com.br',
        pass: '@027Code2023'
    }
    // tls: {
    //     // do not fail on invalid certs
    //     rejectUnauthorized: false,
    //   }
})

const mailer = ({senderMail, nome, telefone, texto}:data) => {
    const from = nome && email ? `${nome} <${email}>` : `${nome || email}`;
    const message = {
        from: `${from}`,
        to: `${email}`,
        subject: `Nova mensagem de contato - ${nome} - ${telefone} - ${senderMail}`,
        text: texto,
        replyTo: `${from}`,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) => {
            console.log(error);
            error ? reject(error) : resolve(info);
        });
    })
}

export default async (req:NextApiRequest, res:NextApiResponse) =>  {
    const {nome, telefone, senderMail, texto } = req.body

    if(!senderMail || !nome || !telefone || !texto) {
        res.status(403).send({});
        return;
    }

    const mailerRes = await mailer({ senderMail, nome, telefone, texto});
    res.send(mailerRes);
};

