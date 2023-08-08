<template>
    <button class="load-more-btn" :disabled="isDisabled" @click="loadMore">
        VIEW MORE
    </button>
</template>

<script>

export default {
  props: ["isDisabled"],
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
  margin-bottom: 1rem ;
  padding: 1.2rem 3rem ;
  color: $text-primary;
  background-color: $blue;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover{
   background-color:transparent;
   color: $blue;
   border: 2px solid $blue;
  }
  &:disabled{
    border:none;
    color: $text-secondary;
    background-color :$gray;
    cursor:not-allowed;
  }
}

</style>