import { rest } from 'msw';

export const handlers = [
    rest.get("/scoops",(req, res, ctx) =>{
        return res(
            ctx.json([
                {name: 'Chocolate', imagePath: '/images/chocolate.png'},
                {name: 'Vanilla', imagePath: '/images/vanilla.png'}
            ])
        );
    }),
    rest.get('/toppings',(req, res, ctx) =>{
        return res(
            ctx.json([
                { name: 'Cherries', imagePath: '/images/cherries.png'},
                { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
                { name: 'Hot fudge', imagePath: '/images/hot-fugde.png'}
            ])
        )
    }),
    rest.get('/order', (req, res, ctx) =>{
        const orderNumber = Math.floor(Math.random()* 1000000000)

        return res(
            ctx.json({orderNumber: orderNumber})
        )
    })
]