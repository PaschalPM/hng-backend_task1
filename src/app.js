const express = require("express")
const responseBody = require('./lib/response_body.js')
const app = express()

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.status(200).json(responseBody(slack_name, track))
})
module.exports = app