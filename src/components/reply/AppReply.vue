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
           
        </div>

        <div class="footer">

            <AppButtonScore :score="reply.score" v-show="!edit"/>

            <div class="leftFooter">
                <AppButtonReply  v-show="!loggedInUser"/>
                <AppButtonDelete v-show="loggedInUser"/>
                <AppButtonEdit v-show="loggedInUser" @click.native="editComment()"/>
                <AppButtonSubmit buttonName="UPDATE" v-show="edit"/>
                
                
            </div>

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
        reply: Object,
        
    },
    data(){
        return{
            content: `@${this.reply.replyingTo}, ${this.reply.content}`,
            edit: false
        }
    },
    methods:{
        editComment(){
            this.edit = true
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


