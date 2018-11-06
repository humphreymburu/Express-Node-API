import express from 'express'
//const express = require('express')
 
const app = express();

app.all('*', (req, res) => {
    res.json({ok: false})
})

export default app