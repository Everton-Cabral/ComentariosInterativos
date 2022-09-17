<template>
    <div>

        <div id="comentarios">
            <div class="cabecario">
                <img class="logo" :src="require('@/assets'+comentario.user.image.png)" alt="Avatar">
              <span class="username">{{comentario.user.username}}</span>  
              {{comentario.createdAt}} 
            </div>
            <div class="comentario">
                {{comentario.content}}
            </div>
            <div class="footer">
               <span class="score">
                    <span>+</span>
                    {{comentario.score}} 
                    <span>-</span>
                </span> 
            </div>
        </div>
        <div class="replies">
            
            <AppReply v-for="(reply, i) in comentario.replies" :key="i"
             :reply ="reply"/> 
             
        </div>

    </div>
    
</template>

<script>

   
import AppReply from '../reply/AppReply.vue';
export default {    
    components:{AppReply},
    props:{
        comentario: Object,
    }

}
</script>

<style src="./style.scss" lang="scss" scoped />


