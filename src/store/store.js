import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        data,
        primaryKey: 10
    },
    mutations:{
        reply(state, params){

             state.data.comments.filter((c)=>{
                if(c.id == params.idComment){
                    params = {
                        id: state.primaryKey+1,
                        content: params.content,
                        createdAt: 'today',
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
                       
        },

        editReply(state, params){
            state.data.comments.filter((c)=>{
               if(c.id == params.idComment){
                    c.replies.filter((r)=>{
                       if(r.id == params.idReply) {
                            r.content = params.content
                       }
                    })
               } 
            })
           
        }
    }
        
})