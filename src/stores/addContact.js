import { defineStore } from "pinia";

export const useAddContactStore = defineStore('personne', {
    state: () => {
        
        const contactsExistants = JSON.parse(localStorage.getItem('contacts')) || [];

        
        const nouveauxContacts = [
            {
                nom: 'John',
                number: '07 12 34 56 78'
            },
            {
                nom: 'Alice',
                number: '06 98 76 54 32'
            }
            
        ];

        // Fusionner les contacts existants avec les nouveaux
        const personnes = [...contactsExistants, ...nouveauxContacts];

        return {
            personnes,
        };
    },
    actions: {
        ajoutPersonne(personne) {
            this.personnes.push(personne);
            localStorage.setItem('contacts', JSON.stringify(this.personnes));
        }
    }
});
