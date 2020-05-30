import { Request, Response, request } from 'express';
import EmailService from '../services/EmailServices';

const users = [
    { nome: 'Diego', email:'diego@rocketseat.com.br' },
];

export default {

    async index( request: Request, response: Response ) {
        return response.json(users)
    },

    async create( request: Request, response: Response ){
        const emailservice = new EmailService();

        emailservice.sendMail({
           to: { 
               name: 'Diedo Fernandes', 
               email: 'diego@rocketseat.com.br'
        },
           message: 
           { 
            subject: 'Bem-vindo ao sistema', 
            body: 'Seja bem-vindo',
         }
    });

        return response.send()
    }

};