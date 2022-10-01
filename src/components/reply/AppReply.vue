<template>
    <div class="reply">
        <div class="cabecario">
            
            <img class="logo" :src="require('@/assets'+reply.user.image.png)" alt="Logo">
           <span class="username">{{reply.user.username}}</span> 
           <span class="identifier" v-show="loggedInUser">you</span>
           <span>{{reply.createdAt}}</span> 
        </div>
   
        <div class="comentario" v-if="edit">

            <textarea name="replyContent" 
                cols="30" rows="10" 
                v-model="content">
               
            </textarea>
        </div>

        <div class="comentario" v-else>
           <span class="replyingTo">{{'@'+reply.replyingTo}} </span>
          
           {{ reply.content }}

           
          <!-- <hr>
            <em v-for="(word, i) in reply.content.split(' ')" :key="i" 
                :class="markedWords(word)">
                    {{word}}
            </em> -->
      
        </div>

        <div class="footer">

            <AppButtonScore :score="reply.score" v-show="!edit"/>

            <div class="leftFooter">
                <AppButtonReply  v-show="!loggedInUser"/>
                <AppButtonDelete v-show="loggedInUser"/>
                <AppButtonEdit v-show="loggedInUser" @click.native="editComment()"/>
                
            </div>

            <AppButtonSubmit buttonName="UPDATE"
                 v-show="edit"
                @click.native="updateReply()"     
            />

        </div>
   
     
    </div>
</template>

<script>
    import AppButtonScore from '../buttonScore/AppButtonScore.vue';
    import AppButtonReply from '../buttonReply/AppButtonReply.vue';
    import AppButtonDelete from '../buttonDelete/AppButtonDelete.vue';
    import AppButtonEdit from '../buttonEdit/AppButtonEdit.vue';
    import AppButtonSubmit from '../buttonSubmit/AppButtonSubmit.vue';

export default {
    components:{ AppButtonScore, AppButtonReply, AppButtonDelete, AppButtonEdit, AppButtonSubmit },
    props:{
        reply: {
            type: Object,
            require: true
        },
        comentarioId: {
            type: Number,
            require: true
        }
        
    },
    data(){
        return{
            content: `@${this.reply.replyingTo}, ${this.reply.content}`,
            edit: false,    
        }
    },

    methods:{
        editComment(){
            this.edit = true
           
        },
        // markedWords(word){
        //     if( word == word.match(/@+([a-z,]*)/gmi)){
        //         return 'replyingTo'
        //     }
        // }
        updateReply(){
            let params = {
                idComment: this.comentarioId,
                idReply: this.reply.id,
                content : this.content
            };
            console.log(this.reply.id)
            this.$store.commit('editReply', params);
            this.edit = false
        }
    },
    computed:{
        loggedInUser(){
            
           let resultado
            if(this.$store.state.data.currentUser.username === this.reply.user.username ){
                    resultado = true
            }
            return resultado
        },
 
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


