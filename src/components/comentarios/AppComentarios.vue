<template>
    <div>
        <div class="comentarios">
            <div class="cabecario">
                <img
                    class="logo"
                    :src="userProfilePic"
                    :alt="comentario.user.username"
                >

                <span class="username">
                    {{ comentario.user.username }}
                </span>

                <span class="identifier" v-show="loggedInUser">you</span>

                {{ comentario.createdAt }} 
            </div>

            <div class="comentario" v-if="edit">

                <textarea name="replyContent" 
                    cols="30" rows="10" 
                    v-model="content">          
                </textarea>

            </div>

            <div v-else class="comentario">
                {{ comentario.content }}
            </div>

            <div class="footer">

                <div class="buttonScore" v-show="!edit">

                    <div class="btnScore" @click="scoreComment('+')" >
                        +
                    </div>
                    
                    <AppButtonScore :score="comentario.score" class="score" />

                    <div class="btnScore" @click="scoreComment('-')">
                        -
                    </div>
                    
                </div>

                <div class="leftFooter" :class="opacity">

                    <AppButtonReply  v-show="!loggedInUser"
                        @click.native="writeAnswer()"
                    />
    
                    <AppButtonDelete v-show="loggedInUser" @click.native="deleteComments"/>
    
                    <AppButtonEdit v-show="loggedInUser"
                        @click.native="editComment"    
                    />

                </div>

                <AppButtonSubmit buttonName="UPDATE"
                    v-show="edit"
                    @click.native="updateComment()"    
                />

            </div>

        </div>

        <AppWrite :comentarioId="comentario.id" 
            :comentarioUsername="comentario.user.username"
            buttonName="REPLY"
            v-show="write" 
            @finishAnswer="writeAnswer()"     
        />

        <div class="replies">

            <AppReply
                v-for="(reply, i) in comentario.replies"
                :key="i"
                :reply ="reply"
                :comentarioId = "comentario.id"
            />

            
            
        </div> 
    </div>
</template>

<script>
import AppReply from '../reply/AppReply.vue';
import AppButtonScore from '../buttonScore/AppButtonScore.vue';
import AppButtonReply from '../buttonReply/AppButtonReply.vue';
import AppButtonEdit from '../buttonEdit/AppButtonEdit.vue'
import AppButtonDelete from '../buttonDelete/AppButtonDelete.vue';
import AppButtonSubmit from '../buttonSubmit/AppButtonSubmit.vue'
import AppWrite from '../write/AppWrite.vue';

export default {    
    components:{ AppReply, AppButtonScore, AppButtonReply, AppButtonEdit ,AppButtonDelete, AppButtonSubmit ,AppWrite},

    props:{
        comentario: {
            type: Object,
            required: true
        },
        currentUser:{
            type: Object,
            require: true
        }
    },
    data(){
        return{
            write: false,
            content: this.comentario.content,
            edit: false
        }
    },
    methods:{
        writeAnswer(){
            this.write = !this.write
        },
        editComment(){
            this.edit = !this.edit
        },
        updateComment(){
             let params = {
                idComment: this.comentario.id,
                content: this.content
            }
            this.$store.commit('editComment', params);
            this.edit = false
        },
        deleteComments(){
            let params = {
                comentarioId: this.comentario.id,
                tipo: 'comentario'
            }
            this.$store.commit('delete', params)
        },
      
        scoreComment(tipo){
            let params = {
                comentarioId: this.comentario.id,
                tipo: tipo
            }
            this.$store.commit('score', params)
        }
    },
    computed: {
        userProfilePic() {
            return require("@/assets" + this.comentario.user.image.webp)
        },   
        loggedInUser(){
            let resultado
            if(this.$store.state.data.currentUser.username === this.comentario.user.username ){
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

<style src="./style.scss" lang="scss" scoped />


