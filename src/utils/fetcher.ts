interface RequestOptions {
  method?: string;
  headers?: HeadersInit;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
}

export default async function fetcher<T>(endpoint: string, options?: RequestOptions): Promise<T> {
  const url = `${import.meta.env.VITE_BASE_HOST}${endpoint}`;

  console.log(url);
  const response = await fetch(url, {
    ...options,
    ...(options?.body && { body: JSON.stringify(options.body) }),
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
}
