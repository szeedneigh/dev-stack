import { create } from 'zustand';
import localforage from 'localforage';

localforage.config({
  name: 'DevStack',
  storeName: 'bookmarks'
});
