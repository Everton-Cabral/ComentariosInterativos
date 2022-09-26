<template>
    <div class="write">
        <textarea name="comentario-usuario" 
                class="comentario-usuario"
                cols="30" rows="10" 
                placeholder="Add a coment..."
                v-model="contentReply">
        </textarea>

        <span> 
            <img class="logo" :src="imgCurrentUser" alt="current-user">
         </span>
        
         
        <button class="button" v-if="buttonName" 
            @click="reply()"> 
            REPLY
        </button>

        <button class="button" v-else>SEND</button>
        
        
   </div>
</template>

<script>
export default {
    props:{
        comentarioId:{
            type: Number,
            require: true
        },
        buttonName:{
            type: String,
            require: true
        }
    },
    data(){
        return{
            contentReply: '',
          
        }
    },
    methods:{
        reply(){
            let params = {
                idComment: this.comentarioId,
                content: this.contentReply,
        
            }
            this.$store.commit('reply', params)
            this.$emit('finishAnswer')
            
        }
    },
    computed:{
        currentUser(){
            return  this.$store.state.data.currentUser
        },
        imgCurrentUser(){
            return require('@/assets'+this.currentUser.image.webp)
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


