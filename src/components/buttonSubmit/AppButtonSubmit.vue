<template>
    <div class="buttonSubmit">
        <button class="button">
            {{ buttonName }}
        </button>
    </div>
</template>

<script>
export default {
    props:{
        buttonName:{
            type: String,
            require: true
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>
