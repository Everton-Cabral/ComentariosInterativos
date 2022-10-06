<template>

    <div class="buttonDelete" :class="opacity">
        <img src="@/assets/images/icon-delete.svg" alt="Delete">
        <span>Delete</span>
    </div>
</template>

<script>
export default {
    props: {
        edit: {
            type: Boolean,
            require: true
        }
    },
    computed:{
        opacity(){
            let resultado = ''
            if(this.edit){
                resultado = 'opacity'
            }
            return resultado
        }
    }
}

</script>

<style src="./style.scss" lang="scss" scoped />


