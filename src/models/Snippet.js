import uuidv4 from 'uuid/v4';

import { languages, TEXT } from './languages';

export const sourceType = {
  LOCAL: 'local',
  GIST: 'gist'
}

/** Class representing a snippet. */
export default class Snippet {
  /**
   * Create a snippet.
   * @param {object} args
   */
  constructor(args) {
    const {
      id,
      source,
      uuid,
      title,
      description,
      language,
      content,
      lastUpdated
    } = args;

    this.id = id;
    this.source = source || sourceType.LOCAL;
    this.uuid = uuid || uuidv4();
    this.title = title;
    this.description = description;
    this.language = language || TEXT;
    this.extension = languages[language] ? languages[language].extension : '';
    this.content = content || '';
    this.lastUpdated = lastUpdated || new Date();
  }
}
