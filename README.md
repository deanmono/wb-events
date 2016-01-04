An event assignment created with mean.js, including foundation.

## Installation

### System Dependencies
The first step is to install the application's dependencies. 

1. Node.js with npm
2. Git

### Clone the Repo
This can be done using https or over ssh. `git clone git@github.com:deanmono/wb-events.git`

### App Dependencies
Move into the projects root directory then use npm to install the app dependencies by typing `npm install`

also run bower to update frontend dependencies 

## Running Locally
From the projects root directory, you can run the app using one of the commands below.

`node server.js`

or simply run `grunt`

## Mongo

The development environment is connected to an instance with mongolab.com.
`mongodb://admin:admin@ds037215.mongolab.com:37215/wbevents`

To use a local instance of mongo, change the config settings located in /config/env/development.js
