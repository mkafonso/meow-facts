import { defineStore } from "pinia";

export const useMeowStore = defineStore("store", {
  state: () => ({
    facts: [] as string[],
  }),

  actions: {
    addToStore(value: string) {
      if (!this.facts.includes(value)) {
        this.facts.push(value);
      }
    },

    addMultipleToStore(values: string[]) {
      this.facts.push(...values);
    },

    readFirstFromStore(): string {
      return this.facts[0];
    },

    removeFirstFromStore() {
      if (this.facts.length > 0) {
        this.facts.shift();
      }
    },

    isStoreEmpty(): boolean {
      return this.facts.length === 0;
    },

    async addMoreIfEmpty() {
      if (this.isStoreEmpty()) {
        const newFacts = await this.fetchNewFacts();
        this.addMultipleToStore(newFacts);
      }
    },

    async fetchNewFacts() {
      try {
        const response = await $fetch<string[]>("/api/facts");
        return response;
      } catch (error) {
        console.error("Failed to fetch new facts:", error);
        return [];
      }
    },
  },
});
