const express=require('express')

const app=express()
const port='8082'
const host='localhost'

app.use(express.static("public"))

app.get('/audio',(req,res)=>{
    let audio=`<a style="color:white" href="/MyMusic.mp3">Shakira Song - Tap here to play</a>`
    let html=`<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></head><body style={"color:white"} class="text-center container bg-dark"><div class="jumbotron"><h1>SHAKIRA PLAYLIST</h1><main class="btn btn-warning btn-lg">${audio}</main></div></body></html>`
    res.send(html)
})

app.get('/image',(req,res)=>{
    let img=`<img src="/Messi.jpg"/>`
    let html=`<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></head><body style={"color:white"} class="text-center container bg-dark"><div class="jumbotron"><h1>MESSI IMAGE</h1><main>${img}</main></div></body></html>`
    res.send(html)
})

app.get('/pdf',(req,res)=>{
    let pdf=`<a style="color:white" href="/AWMAD.pdf">Click here to get PDF</a>`
    let html=`<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></head><body style={"color:white"} class="text-center container bg-dark"><div class="jumbotron"><h1>PDF</h1><main class="btn btn-primary btn-lg">${pdf}</main></div></body></html>`
    res.send(html)
})

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html><html><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></head><body style="color:white"><div class="jumbotron text-center bg-dark"><h1>Home Page</h1></div></body></html>`)
})

app.listen(port,host,()=>{
    console.log(`Listening on http://${host}:${port}`)
})