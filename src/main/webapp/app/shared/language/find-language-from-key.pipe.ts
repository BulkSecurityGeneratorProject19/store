import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'findLanguageFromKey'})
export class FindLanguageFromKeyPipe implements PipeTransform {
    private languages: any = {
        'ar-ly': { name: 'العربية', rtl: true },
        'zh-cn': { name: '中文（简体）' },
        'nl': { name: 'Nederlands' },
        'en': { name: 'English' },
        'et': { name: 'Eesti' },
        'fr': { name: 'Français' },
        'de': { name: 'Deutsch' },
        'hi': { name: 'हिंदी' },
        'mr': { name: 'मराठी' },
        'ta': { name: 'தமிழ்' }
        // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    };
    transform(lang: string): string {
        return this.languages[lang].name;
    }
    isRTL(lang: string): boolean {
        return this.languages[lang].rtl;
    }
}