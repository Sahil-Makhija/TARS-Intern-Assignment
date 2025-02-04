export enum REQUEST_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type FetcherOptions = Omit<RequestInit, "body" | "method">;

type FetcherArg<T> = {
  endpoint: string;
  method?: REQUEST_METHODS;
  body?: T;
  options?: FetcherOptions;
};

type FetcherResponse<T> =
  | {
      success: true;
      data: T;
      error: false;
    }
  | { data: undefined; error: true | string; success: false };

const baseUrl = import.meta.env.VITE_API_URL as string;

export const fetcher = async <ApiArg, ApiResponse>({
  endpoint,
  method = REQUEST_METHODS.GET,
  body,
  options,
}: FetcherArg<ApiArg>): Promise<FetcherResponse<ApiResponse>> => {
  const url = new URL(`${baseUrl}${endpoint}`);
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data as ApiResponse,
      error: false,
    };
  } catch (error) {
    // Handle network errors and JSON parsing errors
    if (error instanceof SyntaxError) {
      console.error("Error parsing JSON:", error);
    } else {
      console.error("Fetch error:", error);
    }
    return {
      error: true,
      data: undefined,
      success: false,
    };
  }
};
