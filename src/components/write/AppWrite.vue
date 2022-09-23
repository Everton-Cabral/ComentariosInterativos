<template>
    <div class="write">
        <textarea name="comentario-usuario" 
                class="comentario-usuario"
                cols="30" rows="10" 
                placeholder="Add a coment...">
        </textarea>

        <span> 
            <img class="logo" :src="imgCurrentUser" alt="current-user">
         </span>
        
        
        <button class="send">SEND</button>
   </div>
</template>

<script>
export default {
 
    computed:{
        currentUser(){
            return  this.$store.state.data.currentUser
        },
        imgCurrentUser(){
            return require('@/assets'+this.currentUser.image.webp)
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped/>


