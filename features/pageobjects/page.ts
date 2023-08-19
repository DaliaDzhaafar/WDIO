/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    public open() {
        return browser.url(`https://www.kinopoisk.ru/`)
    }
    public openlogin() {
        return browser.url(`https://passport.yandex.ru/auth?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252F%253Futm_referrer%253Dwww.google.com%26uuid%3Dcce9650b-9139-4f77-9759-8fe3125b513b`)
    }
    public openHelp() {
        return browser.url('https://yandex.ru/support/kinopoisk/index.html')
    }
    public openMobile() {
        return browser.url('https://yandex.ru/support/kinopoisk/mobile-app-install.html')
    }
    public get error (){
        return $('//*[@id="field:input-login:hint"]')
    }
    public get btnSubmit () {
        return $('//*[@id="__next"]/div[1]/div[2]/div[2]/div/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/a/span/div');
    }
    public clickButton() {
        return this.btnSubmit.click();
    }
    public get loginButton () {
     return $('//*[@id="passp:sign-in"]')
    }
    public clickloginButton() {
        return this.loginButton.click();
    }
    public get passwordButton () {
            return $('//*[@id="passp:sign-in"]')
        }
    public passwordButtonclick() {
        return this.passwordButton.click();
    }
    public get ticket () {
        return $('/html/body/div[3]/div[2]/div/div[5]/main/article/div/div/div/table/tbody/tr[5]/td[2]/p[3]/a')
    }
    public clickTicket() {
        return this.ticket.click()
    }
    public get inputUsername () {
        return $('//*[@id="passp-field-login"]');
    }
    public get icon () {
        return $('//*[@id="__next"]/div[1]/div[1]/header/div/div[3]/div/div[2]/button/div/div/span')
    }
    public get passwordpage () {
        return $('https://passport.yandex.ru/auth/welcome?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252F%253Futm_referrer%253Dwww.google.com%26uuid%3D9edcb8b0-18fb-4635-80cb-cd3a00fc1f75')
    }

    public get inputPassword () {
        return $('//*[@id="passp-field-passwd"]');
    }
    public async login (username: string) {
        await this.inputUsername.setValue(username);
        await this.clickloginButton();

    }
    public async password (password: string) {
        await this.inputPassword.setValue(password);
        await this.passwordButtonclick();

    }
}
