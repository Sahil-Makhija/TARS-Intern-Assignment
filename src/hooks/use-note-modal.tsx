import { create } from "zustand";

export interface NoteModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useNoteModal = create<NoteModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
