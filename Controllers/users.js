const users = (req, res) => {
    res.send('Hello World!')
};

const bodyParser=(req,res)=>{
    console.log(req.body);
    res.send(req.body);
};

module.exports = {
    users,
    bodyParser
}