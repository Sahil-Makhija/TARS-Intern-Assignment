import { create } from "zustand";

export interface NoteModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  audioTranscription: string;
  setAudioTranscription: (script: string) => void;
}

export const useNoteModal = create<NoteModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  audioTranscription: "",
  setAudioTranscription: (script) => {
    set({ audioTranscription: script });
  },
}));
