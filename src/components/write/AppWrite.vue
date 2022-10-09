<template>
    <div class="write">
        <textarea name="comentario-usuario" 
                class="comentario-usuario"
                cols="30" rows="10" 
                placeholder="Add a coment..."
                v-model="content">
               
        </textarea>

        <span> 
            <img class="logo" :src="imgCurrentUser" alt="current-user">
         </span>
        
         
         <AppButtonSubmit v-if="buttonNameSubmit == 'SEND'" 
            :buttonName="buttonNameSubmit"  
            @click.native="comment()"
        />

         <AppButtonSubmit v-else  :buttonName="buttonNameSubmit"
             @click.native="reply()"
        />
        
   </div>
</template>

<script>
import AppButtonSubmit from '../buttonSubmit/AppButtonSubmit.vue'
export default {
    props: {

        comentarioId: {
            type: Number,
            require: true
        },
        comentarioUsername:{
            type: String,
            require: true
        },
        buttonName: {
            type: String,
            require: true
        }
    },
    data() {
        return {
            content: this.comentarioUsername ? `@${this.comentarioUsername}` : '',
           
        };
    },
    methods: {
        reply() {
            let params = {

                idComment: this.comentarioId,
                replyingTo: this.comentarioUsername,
                content: this.content.replace(`@${this.comentarioUsername}`, ''),

            };
            
            this.$store.commit("reply", params);
            this.$emit("finishAnswer");
            this.$emit("noShowReplyReply");
            this.contentReply =  this.comentarioUsername ? `@${this.comentarioUsername}` : '';
            
        },
        comment(){       
          this.$store.commit('comment', this.content);
          this.content = ''
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.data.currentUser;
        },
        imgCurrentUser() {
            return require("@/assets" + this.currentUser.image.webp);
        },
        buttonNameSubmit(){
            let name
            this.buttonName ? name = this.buttonName : name = 'SEND'
            return name
        },
      
     
    
    },
    components: { AppButtonSubmit }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


