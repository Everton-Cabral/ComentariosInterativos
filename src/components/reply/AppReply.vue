<template>
    <div>
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
                
                <span class="replyingTo">
                    {{'@'+reply.replyingTo}} 
                </span>
            
            {{ reply.content }}

            
            <!-- <hr>
                <em v-for="(word, i) in reply.content.split(' ')" :key="i" 
                    :class="markedWords(word)">
                        {{word}}
                </em> -->
        
            </div>

            <div class="footer">

                <div class="buttonScore" v-show="!edit">
                    
                    <div class="btnScore" @click="scoreReply('+')">
                        +
                    </div>

                    <AppButtonScore :score="reply.score" class="score"/>

                    <div class="btnScore" @click="scoreReply('-')">
                         -
                    </div>

                </div>

                <div class="leftFooter" :class="opacity">
                    <AppButtonReply  v-show="!loggedInUser" @click.native="showReplyReply()"/>
                    
                    <AppButtonDelete v-show="loggedInUser" 
                        @click.native="deleteReply"/>

                    <AppButtonEdit v-show="loggedInUser"
                         @click.native="editComment()"
                    />
                    
                </div>

                <AppButtonSubmit buttonName="UPDATE"
                    v-show="edit"
                    @click.native="updateReply()"     
                />

            </div>
          
        </div>

        <AppWrite v-show="replyReply"
            :comentarioId="comentarioId"
            :comentarioUsername="reply.user.username"
            buttonName = "REPLY"
            @noShowReplyReply="showReplyReply()"
        />

    </div>
       
    
</template>

<script>
    import AppButtonScore from '../buttonScore/AppButtonScore.vue';
    import AppButtonReply from '../buttonReply/AppButtonReply.vue';
    import AppButtonDelete from '../buttonDelete/AppButtonDelete.vue';
    import AppButtonEdit from '../buttonEdit/AppButtonEdit.vue';
    import AppButtonSubmit from '../buttonSubmit/AppButtonSubmit.vue';
import AppWrite from '../write/AppWrite.vue';

export default {
    components:{ AppButtonScore, AppButtonReply, AppButtonDelete, AppButtonEdit, AppButtonSubmit, AppWrite },
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
            replyReply: false 
        }
    },

    methods:{
        editComment(){
            this.edit = true
           
        },
        showReplyReply(){
            this.replyReply =  !this.replyReply
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
            
            this.$store.commit('editReply', params);
            this.edit = false
        },
        deleteReply(){
            let params = {
                id: this.reply.id,
                tipo: 'reply',
                comentarioId: this.comentarioId
            }
            
            this.$store.commit('delete', params)
        },
        scoreReply(tipo){
            let params = {
                comentarioId: this.comentarioId,
                tipo: tipo,
                idReply: this.reply.id
            }
            this.$store.commit('score', params)
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
        opacity(){
            let resultado = ''
            if(this.edit){
                resultado = 'opacity'
            }
            return resultado
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


