import express from 'express'
import { Request, Response } from 'express'
import responseBody from './lib/response_body'
const app = express()

type Query = {slack_name:string, track: string}

app.get('/api', (req:Request, res:Response) => {
    const query = req.query as Query
    const {slack_name, track} = query
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.status(200).json(responseBody(slack_name, track))
})

export default app