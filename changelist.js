//Item format
// {
//   type: "", // string - Firewall, Build
//   build: "", // string - Build ID
//   owner: "", // string - User
//   startTimestamp: 0, // number - Unix Epoch Date test started
//   state: "", // string - Pending, Running, Complete, Rejected, Accepted
//   metrics: {
//     status: "", // string - Running, Passed, Failed
//     test: 0, // number - test metricts
//     maintainability: 0, // number - maintainability metricts
//     security: 0, // number - security metricts
//     worksmanship: 0 // number - worksmanship metricts
//   },
//   build: {
//     status: "", // string - Running, Passed, Failed
//     debug: 0, // bool debug build passed
//     release: 0, // bool release build passed
//     buildTimestamp: 0, // number - Unix Epoch Date build completed
//   },
//   unitTest: {
//     status: "", // string - Running, Passed, Failed
//     numberPassed: 0, // number - unit tests passed
//     numberFailed: 0, // number - unit tests failed
//     codeCovered: 0 // number - percent of code covered 0-100
//   },
//   functionalTest: {
//     status: "", // string - Running, Passed, Failed
//     numberPassed: 0, // number - functional tests passed
//     numberFailed: 0, // number - functional tests failed
//     codeCovered: 0 // number - percent of code covered 0-100
//   }
// }

//
angular.module('app', ['ui.bootstrap']).controller('ChangelistAccordion', function ($scope) {
  
  var getData = function() {
    var data = [
      {
        type: "Build", // Firewall, Build
        build: "Tenrox-R1_1235",
        owner: "",
        startTimestamp: 0,
        state: "Pending", //Pending, Running, Complete, Rejected, Accepted
        metrics: null,
        build: null,
        unitTest: null,
        functionalTest: null
      },
      {
        type: "Firewall", // Firewall, Build
        build: "432462",
        owner: "jtuck",
        startTimestamp: 1397844720,
        state: "Running", //Pending, Running, Complete, Rejected, Accepted
        metrics: {
          test: 64,
          maintainability: 53,
          security: 64,
          worksmanship:0
        },
        build: null,
        unitTest: null,
        functionalTest: null
      },
      {
        type: "Firewall", // Firewall, Build
        build: "432461",
        owner: "samy",
        startTimestamp: 1397839980,
        state: "Rejected", //Pending, Running, Complete, Rejected, Accepted
        metrics: {
          test: 64,
          maintainability: 53,
          security: 64,
          worksmanship:72
        },
        build: {
          debug: true,
          release: true,
          buildTimestamp: 1397854200,
        },
        unitTest: {
          numberPassed: 142,
          numberFailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          numberPassed: 4321,
          numberFailed: 2145,
          codeCovered: 23
        }
      },
      {
        type: "Build", // Firewall, Build
        build: "Tenrox-R1_1234",
        owner: "",
        startTimestamp: 1397749320,
        state: "Complete", //Pending, Running, Complete, Rejected, Accepted
        metrics: {
          test:64,
          maintainability: 53,
          security: 64,
          worksmanship:72
        },
        build: {
          debug: true,
          release: true,
          buildTimestamp: 1397764200,
        },
        unitTest: {
          numberPassed: 142,
          numberFailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          numberPassed: 4321,
          numberFailed: 2145,
          codeCovered: 23
        }
      },
      {
        type: "Firewall", // Firewall, Build
        build: "432460",
        owner: "samy",
        startTimestamp: 1397742660,
        state: "Rejected", //Pending, Running, Complete, Rejected, Accepted
        metrics: {
          test: 0,
          maintainability: 0,
          security: 0,
          worksmanship:0
        },
        build: null,
        unitTest: null,
        functionalTest: null
      },
      {
        type: "Firewall", // Firewall, Build
        build: "432459",
        owner: "samy",
        startTimestamp: 1397652180,
        state: "Accepted", //Pending, Running, Complete, Rejected, Accepted
        metrics: {
          test: 64,
          maintainability: 53,
          security: 64,
          worksmanship:72
        },
        build: {
          debug: true,
          release: true,
          buildTimestamp: 1397753160,
        },
        unitTest: {
          numberPassed: 142,
          numberFailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          numberPassed: 4321,
          numberFailed: 2145,
          codeCovered: 23
        }
      },
    ];
    return data
  };

  $scope.changeList = getData();
});
