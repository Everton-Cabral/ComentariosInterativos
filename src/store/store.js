import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        data,
    },
    mutations:{
        reply(state, params){

             state.data.comments.filter((c)=>{
                if(c.id == params.idComment){
                    params = {
                        content: params.content,
                        createdAt: new Date(),
                        score: 0,
                        replyingTo: c.user.username,
                        user:{
                            image:{
                                png: state.data.currentUser.image.png,
                                webp:state.data.currentUser.image.webp,
                            },
                            username: state.data.currentUser.username
                          
                        },
                        
                    }
                    c.replies.push(params)
                }
             })
                       
        }
    }
        
})