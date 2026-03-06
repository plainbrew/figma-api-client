import createClientOriginal from "openapi-fetch";

import type { components, paths } from "./schema";

type CreateClientOptions = {
  baseUrl: string;
  headers?: HeadersInit;
};

export function createClient({ baseUrl, headers }: CreateClientOptions) {
  return createClientOriginal<paths>({
    baseUrl,
    headers,
  });
}

export type { components };
