import { LanguageViewModel } from './language-view-model';
import { ConfigurationTypeViewModel } from './configuration-type-view-model';
import { CloudFilesDomainViewModel } from './cloud-files-domain-view-model';
import { S3BucketViewModel } from './s3-bucket-view-model';
import { SiteGroupViewModel } from './site-group-view-model';
import { Host } from './host';
import { CloudDataStatusViewModel } from './cloud-data-status-view-model';

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
    public configurationTypeViewModel: ConfigurationTypeViewModel,
    public cloudFilesDomainViewModel: CloudFilesDomainViewModel,
    public s3BucketViewModel: S3BucketViewModel,
    public siteGroupViewModel: SiteGroupViewModel,
    public suspended: boolean,
    public hosts: Host[],
    public cloudDataStatusViewModel: CloudDataStatusViewModel
  ){}
}