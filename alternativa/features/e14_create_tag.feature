Feature: Tag management in Ghost Admin

  @user1 @web
  Scenario: Successfully create a new tag in Ghost Admin after login
    Given the user has logged in to the Ghost Admin
    And I wait for 5 seconds
    Then the user navigates to the tags management page
    When I click on the "New tag" button
    And I wait for 2 seconds
    And I enter "New Tag Name" into the tag name input field
    And I wait for 2 seconds
    And I enter "A description for the new tag" into the description input field
    And I wait for 2 seconds
    And I click the "Save" button
