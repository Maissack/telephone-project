<script>
import { useJournalStore } from '@/stores/journal'
export default{
    name: 'CartePerso',
    setup(){
        const journalStore = useJournalStore()
        return{
          journalStore,
        }
    },
    computed:{
        calls(){
            return this.journalStore.callsText
        }
    },
    
}
</script>


<template>
    <div class="journal-single" v-for="call in calls">
      <h2>{{ call.nom }}</h2>
      <p>{{ call.date }}</p>
      <img src="../assets/appel-icon.png" alt="appel icon">
    </div>
</template>


<style scoped>
    .journal-single{
    display: flex;
    flex-direction: column;
  }

  h2{
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    color: black;
    letter-spacing: 1.04px;
  }
  p{
    font-size: 20px;
    font-weight: 500;
    color: rgba(74, 73, 73, 0.797);
    letter-spacing: 1.04px;
  }
  img{
    width: 5%;
  }
</style>
