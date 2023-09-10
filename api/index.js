import express from 'express';
import responseBody from './lib/response_body';
const app = express();
app.get('/api', (req, res) => {
    const query = req.query;
    const { slack_name, track } = query;
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.status(200).json(responseBody(slack_name, track));
});
export default app;
