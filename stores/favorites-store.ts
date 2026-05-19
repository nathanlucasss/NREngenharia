"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  ids: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggleFavorite: (id) =>
        set((state) => {
          const exists = state.ids.includes(id);
          return {
            ids: exists ? state.ids.filter((item) => item !== id) : [...state.ids, id],
          };
        }),
      isFavorite: (id) => get().ids.includes(id),
    }),
    {
      name: "nrengenharia-favorites",
    },
  ),
);
