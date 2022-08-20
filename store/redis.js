const redis = require('redis');

const config = require('../config')

const client = redis.createClient({
    // host: config.redis.host,
    // port: config.redis.port,
    // password: config.redis.password
    url: `redis://${config.redis.user}:${config.redis.password}@${config.redis.host}:${config.redis.port}`
});

(async () => {
    await client.connect();
    console.log('Conectado a Redis')
})()

async function list(table){
    // return new Promise((resolve, reject) => {
    //     client.get(table, (err, data) => {
    //         if(err) return reject(err)
    //         let res = data || null
    //         if(data){
    //             res = JSON.stringify(data)
    //         }

    //         resolve(res)
    //     })
    // })

    const value = await client.get(table);
    return JSON.parse(value)
}

async function get(table, id){
    const value = await client.get(`${table}_${id}`);
    return JSON.parse(value)
}

async function upsert(table, data){
    let key = table;
    if(data && data.id){
        key = key + '_' + data.id
    }

    // client.setEx(key, 10, JSON.stringify(data));
    await client.set(key, JSON.stringify(data))
    return true;
}

module.exports = {
    list,
    get,
    upsert
}