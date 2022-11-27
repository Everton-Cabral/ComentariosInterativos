import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        data,
        primaryKey: 10,
        deleting: false,
        delete: {
            id:'',
            tipo: '',
            comentarioId: ''

        }
    },
    mutations:{
        reply(state, params){

             state.data.comments.filter((c)=>{
                if(c.id == params.idComment){
                    state.primaryKey++
                    params = {
                        id: state.primaryKey,
                        content: params.content,
                        createdAt: 'today',
                        score: 0,
                        replyingTo: params.replyingTo ? params.replyingTo : c.user.username,
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
           
        },

        comment(state, params){
            state.primaryKey++
          let  paramsComment = {
                id: state.primaryKey,
                content: params,
                createdAt: 'Today',
                score: 0,
                user: {
                    image: {
                      png: state.data.currentUser.image.png,
                      webp: state.data.currentUser.image.webp
                    },
                    username: state.data.currentUser.username
                  },
                replies: [],
            }
            state.data.comments.push(paramsComment)
        },

        editComment(state, params){
            state.data.comments.filter((c)=>{
                if(c.id == params.idComment){
                    c.content = params.content
                }
            })
        },
        delete(state, params){
            state.deleting = true
            state.delete.id = params.id
            state.delete.tipo = params.tipo
            state.delete.comentarioId = params.comentarioId
        },
        confirmDelete(state){

            if(this.state.delete.tipo === 'comentario'){
                state.data.comments.filter(
                    (c) =>{
                        if(c.id == state.delete.comentarioId){
                            state.data.comments.splice(state.data.comments.indexOf(c), 1)
                        }
                    }
                )
              
            
            } else {
                state.data.comments.filter(
                    (c) =>{
                        if(c.id == state.delete.comentarioId){
                            c.replies.filter(
                                (r) =>{
                                    if(r.id == state.delete.id){
                                    
                                        c.replies.splice(c.replies.indexOf(r),1)
    
                                    }
                                }
                            )
                        }
                    }
                  )
            }

            state.deleting = false

        },

        score(state, params){
            state.data.comments.filter(
                (c)=>{
                    if(c.id == params.comentarioId){
                        if(params.idReply){
                            c.replies.filter(
                                (r)=>{
                                    if(r.id == params.idReply){
                                        params.tipo == '+' ?  r.score++ :  r.score--
                                    }
                                }
                            )
                        }
                        params.tipo == '+' ?  c.score++ :  c.score--
                      

                        
                       
                    }
                }
            )
        }
    },

        
})


// ao invés do if colocar o if binario na linha 129 e emm cima também