require("dotenv").config()
const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

defineStep(/^I am on the login page$/, async function () {
   await loginPage.navigateToLoginScreen(process.env.SEERPORTAL228)
 })

defineStep(/^I login with Invalid Email ([^"]*)$/, async function (email) {
  await loginPage.submitEmailForm(email)
})

defineStep(/^I login with valid Email$/, async function () {
  await loginPage.submitValidEmailForm(process.env.USER)
})

defineStep(/^I can see validation error message for invalid username$/, async function () {
  await loginPage.invalidUsernameValidation()
})

defineStep(/^I login with Invalid Password ([^"]*)$/, async function (password) {
  await loginPage.submitPasswordForm(password)
})

defineStep(/^I login with valid Password$/, async function () {
  await loginPage.submitValidPasswordForm(process.env.PASSWORD)
})

defineStep(/^I can see Home Page$/, {timeout: 2 * 60000}, async function () {
  await loginPage.homePage()
})

defineStep(/^I can see validation error message for invalid UserName and Password$/, async function () {
  await loginPage.invalidPasswordValidation()
})

// defineStep(
//   /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
//   async function (username, password) {
//     await loginPage.submitLoginWithParameters(username, password)
//   })
