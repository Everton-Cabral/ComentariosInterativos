<template>
    <div id="reply">
        <div class="cabecario">
            
            <img class="logo" :src="require('@/assets'+reply.user.image.png)" alt="Logo">
           <span class="username">{{reply.user.username}}</span> 
           <span>{{reply.createdAt}}</span> 
        </div>
        <div class="comentario">
           <span class="replyingTo">{{'@'+reply.replyingTo}} </span>{{reply.content}}
        </div>
        <div class="footer">
            {{reply.score}}
        </div>
        
       
    </div>
</template>

<script>
export default {
    props:{
        reply: Object,
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


