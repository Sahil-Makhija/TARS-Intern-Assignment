export type User = {
  username: string;
  password: string;
  email: string;
};

export type Note = {
  _id: string;
  userId: string;
  title: string;
  content: string;
  audioTranscription?: string;
  createdAt: Date;
  updatedAt: Date;
  isFavorite: boolean;
  images: string[]; // Array of image URLs (max 5)
};

export type FetcherResponse<T> =
  | {
      success: true;
      data: T;
      error: false;
    }
  | { data: undefined; success: false; error: true | string };
