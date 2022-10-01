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

                {{ comentario.createdAt }} 
            </div>

            <div class="comentario">
                {{ comentario.content }}
            </div>

            <div class="footer">
                <AppButtonScore :score="comentario.score" />

                <AppButtonReply @click.native="writeAnswer()"/>
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
import AppWrite from '../write/AppWrite.vue';
export default {    
    components:{ AppReply, AppButtonScore, AppButtonReply, AppWrite },

    props:{
        comentario: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            write: false
        }
    },
    methods:{
        writeAnswer(){
            this.write = !this.write
        }
    },
    computed: {
        userProfilePic () {
            return require("@/assets" + this.comentario.user.image.webp)
        },   
    }
}
</script>

<style src="./style.scss" lang="scss" scoped />


