export class ClientDetails {
  constructor(
    public siteName: string,
    public databaseName: string,
    public clientUid: string,
    public siteId: number,
    public pingdomCheckId: 0,
    public version: string,
    public siteStatus: string,
    languageViewModel: LanguageViewModel
  ){}
}