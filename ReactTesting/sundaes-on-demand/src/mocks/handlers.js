import { rest } from 'msw';

export const handlers = [
    rest.get("http://localhost:3030/scoops",(req, res, ctx) =>{
        return res(
            ctx.json([
                {name: 'Chocloate', imagePath: '/images/chocolate.png'},
                {name: 'vanilla', imagePath: '/images/vanilla.png'}
            ])
        );
    })
]