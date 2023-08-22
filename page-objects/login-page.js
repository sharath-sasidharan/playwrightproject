const { assert } = require('chai')

class LoginPage {
  
  async navigateToLoginScreen() {
    await page.goto(process.env.SEERPORTAL228)
  }

  async submitEmailForm(email) {
    await page.fill('#email', email)
    await page.click('#root > div > form > div > div > div > button > span')
  }

  async submitValidEmailForm() {
    await page.fill('#email', process.env.USER)
    await page.click('#root > div > form > div > div > div > button > span')
  }

  async invalidUsernameValidation() {
    await page.waitForTimeout(1000)
    const invalidUserNameMsg = await page.$eval("//div[@class='ant-form-item-explain-error']", (element) => element.textContent)
    await assert.equal(invalidUserNameMsg,'Please enter valid e-mail!','Email Validation Passed')
    await page.reload()
  }

  async invalidPasswordValidation() {
  
  }

  async submitPasswordForm(password) {
    await page.fill('#password', password)
    await page.click('(//button[@type="submit"])[1]')
  }

  async submitValidPasswordForm() {
    await page.fill('#password', process.env.PASSWORD)
    await page.click('(//button[@type="submit"])[1]')
  }

  async homePage() {
    await page.waitForTimeout(60000)
    const xpathExpression = '//span[@title="Home Page"]'
    const extractedText = await page.$eval(xpathExpression, (element) => element.textContent)
    //console.log('Extracted Text:', extractedText)
    assert.equal(extractedText, 'Home Page', 'Home Page Validation Passed')
  }
}

module.exports = { LoginPage }
