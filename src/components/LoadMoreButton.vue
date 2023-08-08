<template>
    <button class="load-more-btn" :disabled="isDisabled" @click="loadMore">
        {{ text }}
    </button>
</template>

<script>

export default {
  props: ["text", "isDisabled"],
  methods : {
    loadMore(){
         this.$emit('loadItems')
    },
    
  },
}
</script>

<style lang="scss">
.load-more-btn {
  margin-top: 1rem ;
  padding: 1rem 2rem ;
  color: $text-primary;
  background-color: $bg-blue;
  border: none;
  border-radius: 20px;
}

</style>