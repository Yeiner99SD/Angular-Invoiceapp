import { Invoice } from "../models/invoice";

export const invoiceData: any= {
    id:1,
    name: 'Componente de Pc',
    client: {
        name: 'Yeiner',
        lastName: 'Navarro',
        address: {
            country: 'COLOMBIA',
            city: 'Bogotá',
            street:43
        }
    },
    company: {
        name: 'Innovalife',
        fiscalNumber: 121212,
    },
    items: [
        {
            id:1,
            product: 'Ryzen 3 3200g',
            price: 500,
            quantity: 1
        },
        {
            id:2,
            product: 'Ryzen 5 3200g',
            price: 700,
            quantity: 4
        },
        {
            id: 3,
            product: 'RAM 8 GB DDR4',
            price: 400,
            quantity: 3
        }
    ]
}