import { Note, User } from "@/types";
import { fetcher, REQUEST_METHODS } from "./fetcher";

class ServerService {
  async SignUp({ userData }: { userData: User }) {
    return await fetcher<User, { token: string }>({
      endpoint: "/auth/sign-up",
      method: REQUEST_METHODS.POST,
      body: userData,
    });
  }

  async SignIn({ userData }: { userData: Pick<User, "email" | "password"> }) {
    return await fetcher<Pick<User, "email" | "password">, { token: string }>({
      endpoint: "/auth/sign-in",
      method: REQUEST_METHODS.POST,
      body: userData,
    });
  }

  async Verify() {
    return await fetcher<null, { status: string }>({
      endpoint: "/auth/verify",
      method: REQUEST_METHODS.POST,
    });
  }

  async FetchNotes() {
    return await fetcher<null, { notes: Note[] }>({
      endpoint: "/notes",
      method: REQUEST_METHODS.GET,
    });
  }

  async DeleteNote({ noteId }: { noteId: string }) {
    return await fetcher<{ noteId: string }, { status: boolean }>({
      endpoint: "/notes/delete",
      method: REQUEST_METHODS.DELETE,
      body: { noteId },
    });
  }
}

export const API = new ServerService();
