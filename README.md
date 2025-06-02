# Weather API by Spencer Davis for Coates Group

This app runs on port 5000

In order to run the application, node version 20 or greater

```
npm install
npm run build
```

Enter the environment variable API_KEY

Example if using powershell
This is a fake key so have a real one for

https://openweathermap.org/

```
$env:API_KEY = "adlkfjekjfkejfkejfe5545454"
```

Start the applicatoin

```
npm run start
```

Test the application

```
npm run test
```

Check lint and lintfix

```
npm run lint
npm run lintfix
```

## Swagger Documentation

Once you start the applicaiton, you can access swagger
http://localhost:5000/api-docs/

## Polling

It basically checks to see if city is in PollingList and if not it adds it
Then this starts a weather cache service that updates every entry in the list every 10 min
A map data structure is used so it doesn't create duplicates and preserves the city as the key
The PollingService is a singleton class

This entire app could run on an AWS Lambda with the API_KEY as the environment variable

If you wanted to preserve the data you could use dynamoDB database or MongoDB
