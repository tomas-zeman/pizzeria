# PIZZERIA
Just a simple sample app 

## webapp - frontend
Lets you order a pizza and store an order in the mock backend

done so far: 
* items listing
* placing orders
* order page

what missing:
* admin page
* env management
* realtime features
* mobile device optimization
* real server setup
* more....

**how to start:**

``
ng serve
``

then go open localhost on default port 4200:

``
localhost:4200
``

It's required the have the backend mock server running on port 3000

## backend
Currently it's just a mock server - just for storing orders from the frontned. 
Please consider it as a "black box" I only  created the basic controllers and service without care, in order to make mocked data for frontend more dynamic.

**how to start:**

``
yarn start
``
