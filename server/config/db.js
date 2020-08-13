const mongooes = require('mongoose');
const mongoDB_Url=process.env.MongoDB_URL;

mongooes.connect(mongoDB_Url);
mongooes.connection.on('connected',()=>{
    console.log('Connected to mongodb');
})

mongooes.connection.on('error', (err) => {
  console.log(err);
});

