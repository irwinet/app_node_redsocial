module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3014
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret'
    },
    mysql:{
        host: process.env.MYSQL_HOST || '',
        user: process.env.MYSQL_USER || 'rO6xJgqreS',
        password: process.env.MYSQL_PASS || 'ySBqdS19CS',
        database: process.env.MYSQL_DB || 'rO6xJgqreS',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001        
    },
    cacheService: {
        host: process.env.REDIS_SRV_HOST || 'localhost',
        port: process.env.REDIS_SRV_PORT || 3003        
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-14094.c13.us-east-1-3.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '14094',
        user: process.env.REDIS_USER || 'default',
        password: process.env.REDIS_PASS || 'wkvOZKGD5VOjHbJtT44PexrSRFOqZMhj'
    }
}