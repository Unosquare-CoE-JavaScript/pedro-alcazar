import { render, screen } from '@testing-library/react'
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test ('handles oerror for scoops and toopings routes', async() => {
    server.resetHandlers(
        rest.get('/scoops'),(req, res, ctx) =>{
            res(ctx.status(500))
        },
        rest.get('/toppings'),(req, res, ctx) =>{
            res(ctx.status(500))
        }
    )

    render (<OrderEntry />)
    const alerts = await screen.findAllByRole('alert')
    expect(alerts).toHaveLength(2)

})