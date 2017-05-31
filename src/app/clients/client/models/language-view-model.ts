import { Language } from './language';

export class LanguageViewModel {
  constructor(
    public installedLanguague: string[],
    public availableLanguage: Language[]

  ){};
} 