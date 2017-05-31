export class ConfigurationTypeViewModel {
    constructor(
        public configurationType: string,
        public availableConfigurationTypes: string[],
        public notSupported: boolean
    ){}
}