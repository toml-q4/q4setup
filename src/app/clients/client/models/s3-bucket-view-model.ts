export class S3BucketViewModel {
    constructor(
        public s3Bucket: string,
        public availableBuckets: string[],
        public transferStatusDescription: string,
        public transferStatus: number
    ){}
}