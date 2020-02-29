import Snippet from "models/Snippet";

export const ADD_SNIPPET = 'SNIPPETS_ADD_SNIPPET';
export const UPDATE_SNIPPET = 'SNIPPETS_UPDATE_SNIPPET';
export const DELETE_SNIPPET = 'SNIPPETS_DELETE_SNIPPET';
export const SET_CURRENT_SNIPPET = 'SNIPPETS_SET_CURRENT_SNIPPET';
export const LOAD_SNIPPETS = 'SNIPPETS_LOAD_SNIPPETS';
export const SET_SEARCH_SNIPPETS = 'SNIPPETS_SET_SEARCH_SNIPPETS';

export interface SnippetsState {
  current: Snippet | null;
  list: Array<Snippet> | [];
  query: string;
  lastId: number;
}

interface LoadSnippetsAction {
  type: typeof LOAD_SNIPPETS;
  list: Array<Snippet>;
  current: Snippet;
  lastId: number;
}

interface AddSnippetAction {
  type: typeof ADD_SNIPPET;
  snippet: Snippet;
  list: Array<Snippet>;
}

interface UpdateSnippetAction {
  type: typeof UPDATE_SNIPPET;
  snippet: Snippet;
  list: Array<Snippet>;
}

interface DeleteSnippetAction {
  type: typeof DELETE_SNIPPET;
  current: Snippet;
  list: Array<Snippet>;
}

interface SetSearchSnippetsAction {
  type: typeof SET_SEARCH_SNIPPETS;
  query: string;
}

interface SetCurrentSnippetAction {
  type: typeof SET_CURRENT_SNIPPET;
  id: number;
}

export type SnippetsActionTypes =
  LoadSnippetsAction | AddSnippetAction |
  UpdateSnippetAction | DeleteSnippetAction |
  SetSearchSnippetsAction | SetCurrentSnippetAction;