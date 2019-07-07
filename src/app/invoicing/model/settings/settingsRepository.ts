import { Settings } from './settings';

export class SettingsRepository {

    settings: Settings;

    constructor() {
        this.settings = {
            name: 'Firma Handlowo-Produkcyjna',
            taxNumber: '8730012345',
            streetAddress: 'Ul. Przedsiębiorcza 1/23',
            city: 'Kraków',
            zipCode: '37-319',
            phoneNumber: '12 345 67 89'
          }
    }

    getSettings(): Settings {
        return this.settings;
    }

    setSettings(settings: Settings) {
        this.settings = settings;
    }

}