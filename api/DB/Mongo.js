const { connect } = require('mongoose');

module.exports = (app) => {
    const port = process.env.PORT || 1999
    connect(process.env.MongoDB_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
        .then(() => {
            app.listen(port, () => {
                console.log(process.env.HOST_URL);
            })
        }).catch(err => console.log(err))
}

