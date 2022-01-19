Feature: Create users

    Scenario Outline: Create user
        Given 'juan' execute the petition
        When juan enter the user Data
            | nombre  | <nombre>  |
            | trabajo | <trabajo> |
        Then the user could see the response code <responseCode>
        And could see the json with user data
        Examples: Data from user
            | nombre | trabajo          | responseCode | 
            | Juan   | SoftwareEngineer | 201          | 