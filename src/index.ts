import createClientOriginal from "openapi-fetch";

import type { components, paths } from "./schema";

type CreateClientOptions = {
  baseUrl: string;
};

export function createClient({ baseUrl }: CreateClientOptions) {
  return createClientOriginal<paths>({
    baseUrl,
  });
}

export type { components };
