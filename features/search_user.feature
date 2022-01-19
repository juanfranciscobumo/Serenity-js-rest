Feature: Look for users

  Scenario Outline: Search for a user
    Given 'juan' execute the petition
    When enter the code for the user '<userCode>'
    Then the user could see the response code <responseCode>
    And could see the json with the search
    Examples: Data from user
      | userCode | responseCode |
      | 2        | 200          |
