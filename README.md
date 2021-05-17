# BugSbKo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

- I create an application with this command: ng new design-system --create-application=false --prefix=css --style=scss --minimal
- I create a library. I want to develop my components within: ng generate library components --prefix=cs
- I add angular material to the library: ng add @angular/material
- I add my slider component to my library
- I add storybook to workspace: npx -p @storybook/cli sb init --type angular
- Code the story and run it: npm run storybook
  (picture 1)
- Not Working...
- I create an application type project: ng generate application demo --minimal
- Add angular material to demo project
- I use the slider component
  (picture 2)
- it works!
- The surprise,... if I change the defaultProject from design-system (library) to demo (application),... works!
