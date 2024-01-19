import { defineStore } from "pinia";

export const useJournalStore = defineStore('phone', {
    state: () => ({
        callsText: [
            {
                nom: 'Sophie Martin',
                date: "2021-10-11 12:30:45",
            },
            {
                nom: 'Luc Dupont',
                date: "2021-10-12 15:20:30",
            },
            {
                nom: 'Alice Dubois',
                date: "2021-10-13 18:45:15",
            },
            {
                nom: 'Thomas Moreau',
                date: "2021-10-14 08:15:30",
            },
            {
                nom: 'Emma Leroux',
                date: "2021-10-15 14:10:20",
            },
            {
                nom: 'Hugo Bernard',
                date: "2021-10-16 20:05:12",
            },
            // Ajoutez d'autres contacts au besoin
        ],
    }),
    actions: {
        appel(contact) {
            this.callsText.push(contact);
        }
    }
});
