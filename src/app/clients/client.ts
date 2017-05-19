export class Client {
  constructor(
    public siteName: string,
    public dbName: string,
    public isActive: Boolean,
    public isLive: Boolean,
    public siteStatus: string,
    public clientUid: string,
    public hostnames: string,
    public version: string,
    public configurationType: string,
    public username: string,
    public pingdom: number,
    public bucketName: string,
    public groupName: string,
    public isCloudDataAvailable: Boolean,
    public isCloudDataSyncEnabled: Boolean
  ){}
}