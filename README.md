# Timestamp-Microservice-FCC
Back-end project for FreeCodeCamp

https://fluffy-carpenter.glitch.me/time/1450137600

## How to use:
Send a GET request to: /time/:input

Run tests by running ```npm test```

Input should be a date or a unix timestamp

## Example usage:
/time/December%2015,%202015

/time/1450137600

Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }

## Tech used:
* Code: JavaScript, NodeJS, Express
* Testing: Mocha, Expect, Supertest
* Utility: cors, body-parser
