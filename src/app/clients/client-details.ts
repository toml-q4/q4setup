export class ClientDetails {
  constructor(
    public siteName: string,
    public databaseName: string,
    public siteStatus: string,
    public clientUid: string,
    public version: string,
    public pingdom: number
  ){}
}