<template>
    <div id="home">
        <AppComentarios v-for="comentario in comentarios" :key="comentario.id"
        :comentario = "comentario"/>
        
    </div>
    
</template>

<script>

    import AppComentarios from '../comentarios/AppComentarios.vue';

export default {
    components: { AppComentarios },
    
    computed:{
        comentarios(){
            return this.$store.state.data.comments
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped />


