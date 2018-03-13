# Homeco

## Overview

[Homeco live](http://homeco.club/)

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
  - [ ] Contractor GUI Interface
    - [ ] Payment Control Panel displaying services provided
  - [x] Users can log complaints if services does not reach their expectations

## Screenshots

* User GUI Interface

* Contractor GUI Interface

  ![Contractor GUI Interface](https://media.giphy.com/media/fdFYtQjR7NcFRYDdIp/giphy.gif)

* Contractor Completed Tasks

  ![Contractor Completed Tasks](https://media.giphy.com/media/fQGw3lV9s484LkbmV2/giphy.gif)

* Demo User Login

  ![Demo User Login](https://github.com/GreenRabite/Homeco/blob/contractor_fin_tasks/assets/gifs/demo_user.gif)

* Demo Contractor Login

  ![Demo Contractor Login](https://github.com/GreenRabite/Homeco/blob/master/assets/gifs/demo-contractor.gif)


## Select Code Snippets

### Handle property and package when user sign up.

```js
exports.bindUser = function(req, res, ccbb){
  Property.findOne({_id: req.propertyId}, (err, property)=>{
    if (err) {
      return res.status(400).json(err);
    }
    if (property) {
      property._user = req.userId;
      property.save((errSaveProperty, property)=>{
        if (errSaveProperty) {
          return res.status(400).send({
            errors: errSaveProperty
          });
        } else {
          let i = 1;
          async.forEach(req.services, (service, callback)=>{
            Service.findOne({_id: service}, (errFindService, oneService)=>{
              if (errFindService) {
                return res.status(400).json(errFindService);
              } else {
                const workDate = new Date(Date.now());
                workDate.setDate(workDate.getDate() + (14 * i));
                const timesInOneYear = Math.floor(365 / oneService.serviceRenderCycle);
                let scheduleInOneYear = [];
                for(i=0; i<timesInOneYear; i++){
                  const scheduleDate = new Date(workDate);
                  scheduleInOneYear.push(scheduleDate)
                  workDate.setDate(workDate.getDate() + oneService.serviceRenderCycle);
                }
                async.forEach(scheduleInOneYear, (eachScheduleDate, cb)=>{
                  const newSchedule = new Schedule({
                    _service: service,
                    serviceType: oneService.serviceType,
                    category: oneService.category,
                    _package: req.pacId,
                    _user: req.userId,
                    workDate: eachScheduleDate
                  });
                  newSchedule.save((errSaveSchedule, schedule)=>{
                    if (errSaveSchedule) {
                      throw errSaveSchedule;
                    } else {
                    }
                    cb(()=>{i++;});
                  })
                }, callback())
              }
            })
          }, (errLoop)=>{
            if (errLoop) { throw errLoop; }
            Schedule.find({_user: req.userId}, (errFindSchedules, schedules)=>{
              if(errFindSchedules){ throw errFindSchedules;}
              result = {};
              schedules.forEach(schedule=>{
                result[schedule._id] = schedule;
              })
              if (ccbb) {
                ccbb(result);
              } else {
                return res.json(result);
              }
            })
          })
        }
      })
    }
  })
}
```
