'use strict';

const express = require('express');

const app = express();

require('./adriabot')();

var port = process.env.PORT || 3000;

try  {
    app.listen(port);
    console.log("Executando!!");
    console.log(port);
    
    app.get('/',(req,res)=>{
      res.send("AdriaBot version 1.0.0");

    });


} catch (error) {
   console.log("Erro:");
   console.log(error);
    
}

