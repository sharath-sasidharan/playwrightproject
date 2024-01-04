Feature: Seerportal Login Validation 

    As a user
    I want to login into application

     Scenario Outline:<TestID>: Login with Blank Email
      Given I am on the login page
      When I login with Invalid Email <email>
      Then I can see validation error message for invalid username

      Examples:
           | TestID    | email |
           | Login_01  | ''    |
 
      Scenario Outline:<TestID>: Login with invalid Email
      Given I am on the login page
      When I login with Invalid Email <email>
      Then I can see validation error message for invalid username

      Examples:
           | TestID    | email |
           | Login_02  | sanjay@dataseers  |
    
    Scenario Outline:<TestID>: Login with invalid Password
      Given I am on the login page
      When I login with Invalid Email <email>
      Then I login with Invalid Password <password>
      Then I can see validation error message for invalid UserName and Password

    Examples:
          | TestID   | email                  | password     |
          | Login_03 | syadav@dataseers.in    | abcdsd@123   |

    Scenario Outline:<TestID>: Login with Valid Email and Password
      Given I am on the login page
      When I login with valid Email
      Then I login with valid Password
      Then I enter valid totp
      Then I see client login page and click on Continue as Dataseers
      Then I can see Home Page 

    Examples:
          | TestID   | 
          | Login_04 | 
