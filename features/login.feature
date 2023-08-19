Feature: kinopoisk website

  Scenario: As a user, I can see movies 

    Given I am on the kinopoisk page
    When I click button
    Then I should see page

    Examples:
      |  page       | button                     | movie                      |
      |             |                            |                            |
Scenario: As a user, I can will see error if I dont input login

    Given I am on the login2 page
    When I click login
    Then I should see an error

    Examples:
      |  page       | button                     | movie                      |
      |             |                            |                            |
Scenario: As a user, I can open help page 

    Given I am on the help page
    When I click ticket
    Then I should see help page about ticket

    Examples:
      |  page       | button                     | movie                      |
      |             |                            |                            |

  Scenario: As a user, I can log into the account

    Given I am on the login page
    When I login with login and password
    Then I should see an icon

    Examples:
      | username                        | password             |                                |
      | dashuly200489@yyaho.com         | Baobab1999           |                                |
      
