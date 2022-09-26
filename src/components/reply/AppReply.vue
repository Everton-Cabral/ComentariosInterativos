<template>
    <div class="reply">
        <div class="cabecario">
            
            <img class="logo" :src="require('@/assets'+reply.user.image.png)" alt="Logo">
           <span class="username">{{reply.user.username}}</span> 
           <span class="identifier" v-show="loggedInUser">you</span>
           <span>{{createdAt}}</span> 
        </div>
        <div class="comentario">
           <span class="replyingTo">{{'@'+reply.replyingTo}} </span>{{reply.content}}
        </div>
        <div class="footer">
            <AppButtonScore :score="reply.score"/>

            <div class="leftFooter">
                <AppButtonReply  v-show="!loggedInUser"/>
                <AppButtonDelete v-show="loggedInUser"/>
                <AppButtonEdit v-show="loggedInUser"/>
            </div>
        </div>
   
     
    </div>
</template>

<script>
    import AppButtonScore from '../buttonScore/AppButtonScore.vue';
    import AppButtonReply from '../buttonReply/AppButtonReply.vue';
    import AppButtonDelete from '../buttonDelete/AppButtonDelete.vue';
    import AppButtonEdit from '../buttonEdit/AppButtonEdit.vue'

export default {
    components:{ AppButtonScore, AppButtonReply, AppButtonDelete, AppButtonEdit },
    props:{
        reply: Object,
        
    },
  
    computed:{
        loggedInUser(){
            
           let resultado
            if(this.$store.state.data.currentUser.username === this.reply.user.username ){
                    resultado = true
            }
            return resultado
        },
        createdAt(){
            let resultado
           if(typeof this.reply.createdAt === 'string'){
             resultado = this.reply.createdAt
           } else{

               var createdDay = this.reply.createdAt
               var  today = new Date('2022/09/30') //Insira para que hoje seja uma data futura para teste
               const diff = Math.abs(today - createdDay)
               resultado = Math.ceil(diff / (1000 * 60 * 60 * 24))

               if(resultado <= 7){
                resultado = `${resultado} days ago`
               }

              
           }

            return resultado
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


