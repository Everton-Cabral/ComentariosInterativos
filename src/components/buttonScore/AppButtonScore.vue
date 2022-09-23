<template>
    <div class="buttonScore">
        +
        <span class="score">{{score}}</span>
        -
    </div>
</template>

<script>
export default {
    props:{
        score: Number
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>
  
</style>
