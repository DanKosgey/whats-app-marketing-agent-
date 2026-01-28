/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY?: string;
  // add other VITE_ vars here as needed
  readonly [key: string]: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
