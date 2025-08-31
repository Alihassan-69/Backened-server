import {MongoClient , ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://dbuser:Alihassan@cluster0.ggm5oss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri,{
    serverApi:{
        version: ServerApiVersion.v1,
        Strict: true,
        deprecationErrors: true, 
    }
});