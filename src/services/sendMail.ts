import axios from "axios";



export const sendContactEmail = async (nome:string, telefone:string, senderMail:string, texto:string) => {
    const data = {
        nome,
        senderMail,
        telefone,
        texto
    };

    try {
        return await axios.post("/api/contato", data);
    } catch (error) {
        return error;
    }
}