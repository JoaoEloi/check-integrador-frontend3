import axios from "axios"
import { useState } from "react"



export const CardsInfo = [
    {
        id: 1,
        title: 'Smash-Salada',
        description: 'Pão Especial, Maionese da Casa, Hambúrguer prensado, Queijo Cheddar, Alface e Tomate.',
        button: 'Adicionar',
        image: 'http://www.lepingue.com.br/admin/uploads/images/galeria/smash-salada_6afef15b97b53b06a934b4f5fdd0bfc0__800x600__0x0.jpg',

    },
    {
        id: 2,
        title: 'FRALDINHA NA MOSTARDA',
        description: 'Pão e Maionese da Casa, Hambúrguer de Fraldinha, Queijo Muçarela, Molho de Mostarda e Rúcula.',
        button: 'Adicionar',
        image: 'http://www.lepingue.com.br/admin/uploads/images/galeria/fraldinha-na-mostarda_1a03f2943ef896758c14801580a5943d__800x600__0x0.jpg',

    },
    {
        id: 3,
        title: 'ÁGUA COM E SEM GÁS',
        description: 'Com gás ou sem gás? Refresque-se com sua água favorita.',
        button: 'Adicionar',
        image: 'http://www.lepingue.com.br/admin/uploads/images/galeria/agua-com-e-sem-gas_19b3d1073e4ebc83e6392331f4d11565__800x600__0x0.jpg',
    },
    {
        id: 4,
        title: 'ANÉIS DE CEBOLA',
        description: 'Cortadas em forma de anéis, empanadas com uma leve camada de farinha de rosca já temperada. Acompanha Maionese de Pimenta.',
        button: 'Adicionar',
        image: 'http://www.lepingue.com.br/admin/uploads/images/galeria/aneis-de-cebola_b0f12dba730bce1241701293db481579__800x600__0x0.jpg',

    },
    {
        id: 5,
        title: 'TESTE',
        description: 'teste teste teste teste',
        button: 'TESTE',
        image: 'http://saboritaliana.com.br/imgs/manutencao.jpg',

    },
    {
        id: 6,
        title: 'TESTE',
        description: 'teste teste teste teste',
        button: 'TESTE',
        image: 'http://saboritaliana.com.br/imgs/manutencao.jpg',

    },
    {
        id: 7,
        title: 'TESTE',
        description: 'teste teste teste teste',
        button: 'TESTE',
        image: 'http://saboritaliana.com.br/imgs/manutencao.jpg',

    },
    {
        id: 8,
        title: 'TESTE',
        description: 'teste teste teste teste',
        button: 'TESTE',
        image: 'http://saboritaliana.com.br/imgs/manutencao.jpg',

    }
]