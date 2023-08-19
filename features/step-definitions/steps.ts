import { Given, When, Then } from '@wdio/cucumber-framework';
import Page from '../pageobjects/page.js';
import Movies_page from '../pageobjects/movies_page.js';


const main = new Page()
const movie = new Movies_page()

Given(/^I am on the kinopoisk page/, async () => {
   await main.open()
});

When(/^I click button/ , async () => {
    await  main.clickButton();
    });

Then(/^I should see page/, async () => {
    await expect(movie.pagearticle).toBeTruthy();
});

Given(/^I am on the login2 page/, async () => {
    await main.openlogin()
});
 
 When(/^I click login/ , async () => {
     await  main.clickloginButton();
});
 
 Then(/^I should see an error/, async () => {
     await expect(main.error).toBeDisplayed
 });

 Given(/^I am on the help page/, async () => {
    await main.openHelp()
 });
 
 When(/^I click ticket/ , async () => {
     await  main.clickTicket();
});
 
 Then(/^I should see help page about ticket/, async () => {
     await expect(main.openMobile).toBeTruthy();
});

Given(/^I am on the login page/, async () => {
    await main.openlogin()
});

When(/^I login with login/, async () => {
    await main.login("dashuly200489@yahoo.com")
    await main.password("Baobab1999")
});

Then(/^I should see an icon/, async () => {
    await expect(main.icon).toBeExisting();
});
