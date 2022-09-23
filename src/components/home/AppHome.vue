<template>
    <div id="home">
        <AppComentarios v-for="comentario in comentarios" :key="comentario.id"
        :comentario = "comentario"/>
       
        <AppWrite  />
    </div>
    
</template>

<script>

    import AppComentarios from '../comentarios/AppComentarios.vue';
    import AppWrite from '../write/AppWrite.vue';

export default {
    components: { AppComentarios, AppWrite },
    
    computed:{
        comentarios(){
            return this.$store.state.data.comments
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped />


