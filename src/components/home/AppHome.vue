<template>
   

    
    <div id="home">
           
                 <AppDelete />
           

           

                <AppComentarios v-for="comentario in comentarios" :key="comentario.id"
                :comentario = "comentario"
                :currentUser = "currentUser"  
                :class="opacity"
                
                />
            
                <AppWrite :class="opacity" /> 
           
            
        </div>

 

</template>

<script>

    import AppComentarios from '../comentarios/AppComentarios.vue';
    import AppWrite from '../write/AppWrite.vue';
import AppDelete from '../delete/AppDelete.vue';

export default {
    components: { AppComentarios, AppWrite, AppDelete },

    data(){
        return {
            deleting: true
        }
    },
    
    computed:{
        comentarios(){
            return this.$store.state.data.comments
        },
        currentUser(){
            return this.$store.state.data.currentUser
        },
        opacity(){
            let resultado
            if(this.deleting){
                resultado = 'opacity'
            }
            return resultado
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped />


