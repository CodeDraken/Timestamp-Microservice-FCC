# Timestamp-Microservice-FCC
Back-end project for FreeCodeCamp

## Usage:
Send a GET request to: /time/:input
Input should be a date or a unix timestamp

## Example usage:
/time/December%2015,%202015
/time/1450137600
Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }

## Tech used:
* Code: JavaScript, NodeJS, Express
* Testing: Mocha, Expect, Supertest
