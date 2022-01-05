export default function getById(req, res) {
    // res.setHeader('Content-Type', 'application/json')
    // res.end(req.query.id)

    res.json({yourId: req.query.id})
}