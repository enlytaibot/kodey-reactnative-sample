# kodey-react-native-sample

This repository is an example Kodey.ai Coding Agent Workflow

## Objectives

In this sample, we will explore how Kodey.ai can create projects for react.

## Project Setup & Steps 

1. Signup for a new Kodey.ai account or login to your existing Kodey.ai environmenty (link-here)
2. Configure your Kodey.ai integrations to the desired issue tracker and cloud git provider.
3. Fork this repository, and clone it to the cloud git provider of your choosing (Github, Azure DevOps, Bitbucket)
4. Create the sample issue / work item in your issue tracker. Copy and Paste the issue description from below.
5. Execute the below prompt in the Kodey.ai chat UI
6. Validate the commits and pull requests in your cloud git provider

### SAMPLE PROMPT - Github Tools (Sample React Components for login and signup page)
```
    platform: github | bitbucket | azure | gitlab (choose one of these)

    repository-to-work-on: kodey-react-native-sample

    branch name to create: feature/login-signup

    Information to agent: Do as the steps below are defined one by one. You are working in <platform> repo so make sure to use tools related to <platform> repo. 
    NOTE: You should write the actual implementation of code not just comments.

    Steps:

    step 1: Create a new branch with name <branch name to create> first and then do the steps below.

    step 2: Create a new file inside src/component directory that will have component for the signup screen. The file name should be SignupScreen.js.
    Signup page should have signup form with username, email, password fields and a signup button. The signup button should be disabled if the username, email or password is empty.
    Use proper styling and beautify the form. Use normal html for the fields and not any react components.

    step 3: Create a new file inside src/component directory that will have component for the login screen. The file name should be LoginScreen.js.
    Login page should have login form for username, password and a login button. The login button should be disabled if the username or password is empty. There should be option for forget password and signup link.
    The signup link should navigate to the signup page created above. Use proper styling and beautify the form. Use normal html for the fields and not any react components.

    step 4: Using webcrawler tool, understand how routing is done from https://www.geeksforgeeks.org/reactjs-router/ And then apply the understanding to route to newly created components. Using AzureDevopsRepositoryGetFile tool, get the content of the file src/App.js and update the App.js file to have the links that navigates to singup and login page created above.
    Also the App.js file should have detail about the company with some pictures and text. The company name is Enlytai. The company is a software development company. The company is located in New York, USA.
    The App.js file should have links for login and signup page. The login link should navigate to the login page and the signup link should navigate to the signup page.

    step 5: Create a new Pull Request from the above created branch with title "React Native Signup And Login Page".

    step 6: Update this issue status to closed.

```

## Once you have set the description of the issue in your relavant system. You need to use kodey UI Chat and execute below statement to get the work done. 

### Github Issue and Github Repo
```
   Get the issue with id <issue_id> from github repo and do as the description of the issue says.
```

### Azure Repo Issue and Azure Repo
```
   Get the issue with id <issue_id> from azure repo and do as the description of the issue says.
```

### Jira Issue and Bitbucket Repo
```
   Get the issue with id <issue_id> from jira and do as the description of the issue says.
```

## Confirming Successful Sample Outputs

1. Confirm that the branch was created on the issue / work item
2. Confirm that the code created in the associated pull request contains the following
3. Confirm that the work item/issue/ticket in your relevant issue tracking platform is updated.