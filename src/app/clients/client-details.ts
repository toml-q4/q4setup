import { LanguageViewModel } from './language-view-model';
import { ConfigurationTypeViewModel } from './configuration-type-view-model';

export class ClientDetails {
  constructor(
    public siteName: string,
    public databaseName: string,
    public clientUid: string,
    public siteId: number,
    public pingdomCheckId: 0,
    public version: string,
    public siteStatus: string,
    public languageViewModel: LanguageViewModel,
    public configurationTypeViewModel: ConfigurationTypeViewModel
  ){}
}