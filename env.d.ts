/// <reference types="astro/client" />
declare module 'astro-seo';

interface DifyChatbotConfig {
  token: string;
  baseUrl: string;
  inputs: Record<string, string>;
  systemVariables: {
    user_id?: string;
    conversation_id?: string;
  };
  userVariables: {
    avatar_url?: string;
    name?: string;
  };
}

interface Window {
  difyChatbotConfig: DifyChatbotConfig;
}
