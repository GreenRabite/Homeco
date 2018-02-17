# Homeco

## Overview

### Background

Homeowners face a huge burden with their property maintenance often dealing with scores of different contractors and different form of bill payments. And contracting existing third party providers for home service can be costly and inconvenient, leading to more headaches then they solve. What if we told you, there was a better way to deal with this?

### Solution

Introducing **Homeco**, an all-in-one home service provider that aims to be both affordable and convenient way to manage and maintain your homes. Homeco does all the heavy lifting for you from scheduling seasonally maintenance inspection to keep your property in pristine condition.

## Technologies

* Frontend
    * React
    * Redux
* Backend
    * Node.js
    * Express
* Database
    * MongoDB

## MVPs
  * Authentication
    * End User
    * Contractors
  * Notification System
  * Service Analysis
    * Base off of property geolocation
    * Provide three different service packages
  * User GUI Interface
    * Calendar view to view upcoming scheduled services
    * Will allow user to switch to to-do list
    * Allow user to review service history
  * Contractor GUI Interface
    * List what types of service and coverage they can provide
    * Depending on services needed, will dispatch service actions to contractors
    * Will show list items of services that they need to provide to end user

### **BONUS**
  * Contractor GUI Interface
    * Payment Control Panel displaying services provided
  * Users can log complaints if services does not reach their expectations
  
## Wireframes
![](https://github.com/GreenRabite/Homeco/blob/master/wireframes/Screenshot%20from%202018-02-16%2012-28-47.png?raw=true)
![](https://github.com/GreenRabite/Homeco/blob/master/wireframes/Screenshot%20from%202018-02-16%2012-28-57.png?raw=true)
![](https://github.com/GreenRabite/Homeco/blob/master/wireframes/Screenshot%20from%202018-02-16%2012-29-10.png?raw=true)
![](https://github.com/GreenRabite/Homeco/blob/master/wireframes/Screenshot%20from%202018-02-16%2012-29-20.png?raw=true)
![](https://github.com/GreenRabite/Homeco/blob/master/wireframes/Screenshot%20from%202018-02-16%2012-29-29.png?raw=true)

## Timeline
### Day 0
  - [ ] Project Proposal
  - [ ] Learn Node.js, Express, MongoDB
  - [ ] Setup node modules and Webpack

### Over Weekend
  - [ ] Finish Authentication
  - [ ] Setup NoSQL-type database
  - [ ] Basic HTML/CSS

### Day 1 & 2
  - [ ] Start service analysis and packages services for User
  - [ ] Make AJAX call to get as much information about property
  - [ ] Basic HTML/CSS

### Day 3
  - [ ] User GUI Interface

### Day 4
  - [ ] Contractor GUI Interface
  - [ ] Allow Contractor to upload pictures

### Day 5
  - [ ] Fixed Bugs
  - [ ] Refactor Code and optimize logic

### Final Weekend
  - [ ] Deploy on Heroku
  - [ ] Finish styling and better UI
