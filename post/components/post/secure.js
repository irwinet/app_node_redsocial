const auht = require('../../../auth')
const Controller = require('./index')

function checkAuth(action, options){
    async function middleware(req, res, next){
        switch (action) {
            case 'add':
            case 'list_own':
                auht.check.logged(req)
                next()
                break;
            case 'update':
                const post = await Controller.get(req.body.id)                
                auht.check.own(req, post[0].user)
                next()
                break;
        
            default:
                next()
        }
    }
    return middleware
}

module.exports = checkAuth