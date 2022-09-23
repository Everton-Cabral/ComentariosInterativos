<template>
    <div class="buttonReply">
        <img
            :src="replyIcon"
            alt="reply"
        >

        <span>Reply</span>
    </div>
</template>

<script>
export default {
    name: "AppButtonReply",

    computed: {
        replyIcon () {
            return require('@/assets/images/icon-reply.svg');
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped />
   

