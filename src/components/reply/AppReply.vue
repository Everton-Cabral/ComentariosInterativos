<template>
    <div class="reply">
        <div class="cabecario">
            
            <img class="logo" :src="require('@/assets'+reply.user.image.png)" alt="Logo">
           <span class="username">{{reply.user.username}}</span> 
           <span class="identifier">you</span>
           <span>{{reply.createdAt}}</span> 
        </div>
        <div class="comentario">
           <span class="replyingTo">{{'@'+reply.replyingTo}} </span>{{reply.content}}
        </div>
        <div class="footer">
            <AppButtonScore :score="reply.score"/>
            <AppButtonReply />
        </div>
        
       
    </div>
</template>

<script>
    import AppButtonScore from '../buttonScore/AppButtonScore.vue';
    import AppButtonReply from '../buttonReply/AppButtonReply.vue';

export default {
    components:{ AppButtonScore, AppButtonReply},
    props:{
        reply: Object,
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


