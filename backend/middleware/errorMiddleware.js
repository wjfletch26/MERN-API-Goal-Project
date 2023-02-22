
// function called errorHandler to over


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    //  ?= if           := else
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}
// === equal too    ?= then  := else

module.exports = {
    errorHandler,
}
