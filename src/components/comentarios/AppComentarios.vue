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

                <AppButtonReply/>
            </div>
        </div>

        <div class="replies">
            <AppReply
                v-for="(reply, i) in comentario.replies"
                :key="i"
                :reply ="reply"
            />
        </div>
    </div>
</template>

<script>
import AppReply from '../reply/AppReply.vue';
import AppButtonScore from '../buttonScore/AppButtonScore.vue';
import AppButtonReply from '../buttonReply/AppButtonReply.vue';
export default {    
    components:{ AppReply, AppButtonScore, AppButtonReply },

    props:{
        comentario: {
            type: Object,
            required: true
        }
    },

    computed: {
        userProfilePic () {
            return require("@/assets" + this.comentario.user.image.webp)
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped />


