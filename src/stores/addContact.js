import { defineStore } from "pinia";

export const useAddContactStore = defineStore('personne', {
    state: () => ({
        personnes: [
            {
                nom: 'Nelson',
                number: '07 44 78 40 12'
            },
            {
                nom: 'Luc',
                number: '06 46 67 23 12'
            },
            {
                nom: 'Philippe',
                number: '07 20 11 89 44'
            },
            
        ],
    }),
    actions: {
        ajoutPersonne(personne) {
            this.personnes.push(personne);
        }
    }
});
