const { error } = require('../../../network/response');
const nanoid = require('nanoid');

const TABLA = 'post';

module.exports = function(injectedStore) {
    
    let store = injectedStore;
    if(!store){
        store = require('../../../store/dummy');
    }

    function list(){
        return store.list(TABLA);
    }

    async function get(id){
        const post = await store.get(TABLA, id);
        if(!post){
            throw error('No existe el post', 404)
        }

        return post
    }

    async function upsert(data, user){
        const post = {
            id: data.id,
            user: user,
            text: data.text
        }

        if(!post.id){
            post.id = nanoid();
        }

        return store.upsert(TABLA, post).then(() => post)
    }

    async function like(post, user){
        const like = await store.upsert(TABLA+'_like', {
            post: post,
            user: user
        })

        return like
    }

    async function postsLiked(user){
        const users = await store.query(TABLA + '_like', {user: user }, {post: "post"});
        return users;
    }

    async function postLikers(post){
        const users = await store.query(TABLA + '_like', {post: post }, {post: "post"});
        return users;
    }

    return {
        list,
        get,
        upsert,
        like,
        postsLiked,
        postLikers
    }
}