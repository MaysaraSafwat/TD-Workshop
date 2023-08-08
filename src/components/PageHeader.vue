<template>
   <div class="header">
      <h2>Page Title - RSS Feed</h2>
        <div class="underline"></div>
     
   </div>
</template>

<script>


export default {
  
}
</script>

<style lang="scss" scoped>
.header {
    color : $text-secondary;
    text-align: start;
    margin-bottom: 2rem;

    h2{
      font-weight: 700;
      font-family: $primary-font;
      margin-bottom: 1rem;
    }
   .underline{
      width: 80px;
      background: $yellow;
      height: 5px;
   }
}
</style>