/**
 * Dependency Modules
 */
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");// Application Server
const serverUri = "http://localhost:3000/user/signin";
const appTitle = "React App";/**
 * Config for Chrome browser
 * @type {webdriver}
 */
var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "chrome" })
 .build();/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */

function logTitle() {
 return new Promise((resolve, reject) => {
  browser.getTitle().then(function(title) {
   resolve(title);
  });
 });
}


describe("Log In Page", function() {
 
 it("Should load the log in page", function() {
  return new Promise((resolve, reject) => {
   browser
    .get(serverUri)
    .then(logTitle)
    .then(title => {
     assert.strictEqual(title, appTitle);
     resolve();
    })
    .catch(err => reject(err));
  });
 });
 

 it("Should check whether username found", function() {
  return new Promise((resolve, reject) => {
   browser
    .findElement({ div: "form-size" })
    .then(elem => resolve())
    .catch(err => reject(err));
  });
 });

 after(function() {
  browser.quit();
 });
});