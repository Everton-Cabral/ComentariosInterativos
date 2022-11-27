<template>
    <div class="delete">
        <h3>Delete Comment</h3>
        <span> 
            Are you sure you want to delete this comment? This will remove the comment and can't be undone
        </span>
        <div class="buttons">
            <button class="noCancel" @click="cancelDelete">NO, CANCEL</button>
            <button class="yesDelete" @click="confirmDelete">YES, DELETE</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        cancelDelete(){
            this.$store.state.deleting = false
        },
        confirmDelete(){
            this.$store.commit('confirmDelete')
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>
