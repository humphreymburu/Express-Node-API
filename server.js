//import express from 'express'
const express = require('express')
 
const app = express();

app.get('/', (req, res) => res.json({
    ok: true
}))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})