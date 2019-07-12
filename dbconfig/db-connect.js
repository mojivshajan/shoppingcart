let MongoClient = require('mongodb').MongoClient
let state = {
    db:null
};
module.exports.connect = function (done) {

    //connection url
    const url =  'mongodb://localhost:27017';
    //database name
    const dbName = 'shopping';
    //create newmogoclient
    const client = new MongoClient(url,{useNewUrlParser:true});
    //use connect methpd to connect to the server
    client.connect(function (err) {
        if(err) return done(err);
        console.log("Connected successfully to Database");
        const dbs = client.db(dbName);
        state.db=dbs;
        done();

    });

};
module.exports.get=function () {
    return state.db;
}