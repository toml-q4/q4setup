export class CloudDataStatusViewModel {
    constructor(
        public isCloudDataAvailable: boolean,
        public isCloudDataSyncEnabled: boolean,
        public cannotToggle: boolean,
        public cloudDataSyncStatus: string,
        public cloudDatabaseHasError: boolean,
        public lastCloudDatabaseOperationStatus?: any,
        public lastCloudDatabaseOperationStatusEndDateLocalFormat?: any
    ){}
}