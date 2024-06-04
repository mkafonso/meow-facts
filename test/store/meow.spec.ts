import { createPinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useMeowStore } from '../../store/meow';

describe('useMeowStore', () => {
  let store: any;

  beforeEach(() => {
    const pinia = createPinia();
    store = useMeowStore(pinia);
  });

  it('should check if the store is empty', () => {
    expect(store.isStoreEmpty()).toBe(true);
    store.addMultipleToStore(['fun fact about cats number 1', 'fun fact about cats number 2']);
    expect(store.isStoreEmpty()).toBe(false);
  });

  it('should remove the first value from the store', () => {
    store.addMultipleToStore(['fun fact about cats number 1', 'fun fact about cats number 2']);
    store.removeFirstFromStore();
    expect(store.facts).toEqual(['fun fact about cats number 2']);
  });

  it('shoudl add new value to the store', () => {
    store.addToStore('fun fact about cats');
    expect(store.facts).toContain('fun fact about cats');
  });

  it('should add more than one fact to the store', () => {
    store.addMultipleToStore(['fun fact about cats number 1', 'fun fact about cats number 2']);
    expect(store.facts).toEqual(['fun fact about cats number 1', 'fun fact about cats number 2']);
  });

  it('should be able to get the first value from the store', () => {
    store.addMultipleToStore(['fun fact about cats number 1', 'fun fact about cats number 2']);
    expect(store.readFirstFromStore()).toBe('fun fact about cats number 1');
  });
});
