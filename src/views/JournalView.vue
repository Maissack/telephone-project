<script>
import journal from '../components/journal.vue'
  export default{
    name: 'JournalView',
    components:{
      journal,
    },
    
}
</script>

<template>
  <div class="journal-global-content">
    <journal />
  </div>
</template>

<style scoped>
  .journal-global-content{
    border: 3px solid #3498db;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
</style>

