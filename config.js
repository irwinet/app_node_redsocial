module.exports = {
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
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'rO6xJgqreS',
        password: process.env.MYSQL_PASS || 'ySBqdS19CS',
        database: process.env.MYSQL_DB || 'rO6xJgqreS',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001        
    }
}