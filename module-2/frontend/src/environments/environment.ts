// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// WARNING: require u to run service in docker for service:
// docker run -p 8080:8080 993906457390.dkr.ecr.us-east-1.amazonaws.com/mythicalmysfits/service:latest
// http://localhost:8080/api/mysfits
export const environment = {
  production: false,
  mysfitsApiUrl: 'http://localhost:8080/api'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
