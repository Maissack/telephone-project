<script>
import { useAddContactStore } from '@/stores/addContact'

export default {
  name: 'addcontact',
  setup() {
    const personneStore = useAddContactStore()

    return {
      personneStore,
      perso: {
        nom: '',
        number: ''
      },
    }
  },
  methods: {
    ajoutPerso() {
      // Validation pour s'assurer que le numéro commence par "06" ou "07"
      if (!/^07\d{8}$|^06\d{8}$/.test(this.perso.number)) {
        alert("Le numéro doit commencer par 06 ou 07 et avoir 10 chiffres.");
        return;
      }

      this.personneStore.ajoutPersonne(this.perso);
      this.perso = {
        nom: '',
        number: ''
      };
    }
  }
}
</script>

<template>
  <div class="addContact-global-content">
    <form @submit.prevent="ajoutPerso()">
      <div class="adding">
        <h2>Nom</h2>
        <input type="text" v-model="perso.nom">
      </div>
      <div class="adding">
        <h2>Numéro</h2>
        <input type="text" v-model="perso.number">
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<style scoped>
  .addContact-global-content {
    border: 3px solid rgb(245, 155, 20);
    display: grid;
    grid-template-rows: repeat(3, auto);
    gap: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
  }

  .adding {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px; 
  }

  h2 {
    font-size: 18px;
    margin-bottom: 5px;
    color: black;
  }

  input {
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border: 2px solid #3498db;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
  }

  button {
  border: none;
  background-color: #3498db;
  color: #fff;
  font-size: 18px;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
  color: #fff;
}
</style>

