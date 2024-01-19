<script>
import { useClavierStore } from '@/stores/clavier'
import { useAddContactStore } from '@/stores/addContact'
import { useJournalStore } from '@/stores/journal'

export default {
  name: 'ClavierView',
  setup() {
    const clavierStore = useClavierStore()
    const personneStore = useAddContactStore()
    const journalStore = useJournalStore()

    return {
      clavierStore,
      personneStore,
      journalStore,
    }
  },
  computed: {
    number() {
      return this.clavierStore.clavierText
    },
    errorMessage() {
      return this.clavierStore.errorMessage;
    },
    Friendsname() {
      const person = this.personneStore.personnes.find(p => p.number === this.number)
      if (person) {
        return person.nom
      }
    }
  },
  methods: {
    addNumber(number) {
      this.clavierStore.incrementClavier(number)
    },
    call() {
      const date = new Date().toISOString().slice(0, 16).replace('T', ' ');
      this.journalStore.appel({ nom: this.Friendsname, date: date })
      this.clavierStore.resetClavier()
    },
    deleteLastDigit() {
      // Correction ici
      this.clavierStore.deleteLastDigit();
    }
  }
}
</script>



<template>
  <div class="clavier-global-conteneur">
    <div class="clavier-first-content">
      <div class="number-input">
        <p class="number">{{ number }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
      <div class="name-contact-find">
        <p class="name">{{ Friendsname }}</p>
      </div>
    </div>
    <div class="clavier-second-content">
      <div class="number-inputed" @click="addNumber(1)">
        <p>1</p>
      </div>
      <div class="number-inputed" @click="addNumber(2)">
        <p>2</p>
        <p>ABC</p>
      </div>
      <div class="number-inputed" @click="addNumber(3)">
        <p>3</p>
        <p>DEF</p>
      </div>
      <div class="number-inputed" @click="addNumber(4)">
        <p>4</p>
        <p>GHI</p>
      </div>
      <div class="number-inputed" @click="addNumber(5)">
        <p>5</p>
        <p>JKL</p>
      </div>
      <div class="number-inputed" @click="addNumber(6)">
        <p>6</p>
        <p>MNO</p>
      </div>
      <div class="number-inputed" @click="addNumber(7)">
        <p>7</p>
        <p>PQRS</p>
      </div>
      <div class="number-inputed" @click="addNumber(8)">
        <p>8</p>
        <p>TUV</p>
      </div>
      <div class="number-inputed" @click="addNumber(9)">
        <p>9</p>
        <p>WXYZ</p>
      </div>
      <div class="number-inputed" @click="deleteLastDigit()">
        <p>Effacer</p>
      </div>
      <div class="number-inputed" @click="addNumber(0)">
        <p>0</p>
      </div>
      <div class="number-inputed">
        <p>#</p>
      </div>
      <img src="../assets/appel-icon.png" alt="appel icon" @click="call()">
    </div>
  </div>
</template>

<style scoped>
.clavier-global-conteneur {
  border: 3px solid #3498db;
  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 3fr;
}

.clavier-first-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.number-input {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}




.number {
  width: 100%;
  height: 30px;
  border: 3px solid #3498db;
  font-size: 18px;
}

.error-message {
  color: #e74c3c;
  margin-top: 10px;
}

.clavier-second-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}

.number-inputed {
  cursor: pointer;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #34495e;
  color: #ecf0f1;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.number-inputed span {
  font-size: 12px;
  margin-top: 5px;
}

.number-inputed:hover {
  background-color: #2c3e50;
}

.clavier-second-content img {
  width: 10%;
  grid-column: 1/-1;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.clavier-second-content img:hover {
  transform: scale(1.1);
}
</style>