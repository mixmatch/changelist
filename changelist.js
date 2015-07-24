//Item format
// {
//   type: "", // string - Firewall, Build
//   build: "", // string - Build ID
//   owner: "", // string - User
//   startTimestamp: , // number - Unix Epoch Date test started
//   state: "", // string - Pending, Running, Complete, Rejected, Accepted
//   metrics: {
//     test: , // number - test metricts
//     maintainability: , // number - maintainability metricts
//     security: , // number - security metricts
//     worksmanship:  // number - worksmanship metricts
//   },
//   build: {
//     debug: , // bool debug build passed
//     release: , // bool release build passed
//     buildTimestamp: , // number - Unix Epoch Date build completed
//   },
//   unitTest: {
//     numberPassed: , // number - unit tests passed
//     numberFailed: , // number - unit tests failed
//     codeCovered: // number - percent of code covered 0-100
//   },
//   functionalTest: {
//     numberPassed: , // number - functional tests passed
//     numberFailed: , // number - functional tests failed
//     codeCovered: // number - percent of code covered 0-100
//   }
// }

data = [
  {
    type: "", // Firewall, Build
    build: "",
    owner: "",
    startTimestamp: "",
    state: "", //Pending, Running, Complete, Rejected, Accepted
    metrics: {
      test: ,
      maintainability: ,
      security: ,
      worksmanship: 
    },
    build: {
      debug: ,
      release: ,
      buildTimestamp: "",
    },
    unitTest: {
      numberPassed: ,
      numberFailed: ,
      codeCovered:
    },
    functionalTest: {
      numberPassed: ,
      numberFailed: ,
      codeCovered:
    }
  }
];
