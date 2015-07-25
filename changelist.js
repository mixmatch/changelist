//Item format
// {
//   type: "", // string - firewall, build
//   build: "", // string - build ID
//   owner: "", // string - User
//   startTimestamp: 0, // number - Unix Epoch Date test started
//   state: "", // string - pending, running, complete, rejected, accepted
//   metrics: {
//     status: "", // string - running, passed, failed
//     test: 0, // number - test metricts
//     maintainability: 0, // number - maintainability metricts
//     security: 0, // number - security metricts
//     worksmanship: 0 // number - worksmanship metricts
//   },
//   build: {
//     status: "", // string - running, passed, failed
//     debug: 0, // bool debug build passed
//     release: 0, // bool release build passed
//     buildTimestamp: 0, // number - Unix Epoch Date build completed
//   },
//   unitTest: {
//     status: "", // string - running, passed, failed
//     numberpassed: 0, // number - unit tests passed
//     numberfailed: 0, // number - unit tests failed
//     codeCovered: 0 // number - percent of code covered 0-100
//   },
//   functionalTest: {
//     status: "", // string - running, passed, failed
//     numberpassed: 0, // number - functional tests passed
//     numberfailed: 0, // number - functional tests failed
//     codeCovered: 0 // number - percent of code covered 0-100
//   }
// }

//
angular.module('app', ['ui.bootstrap'])
.filter('html',function($sce){
    return function(input){
        return $sce.trustAsHtml(input);
    }
})
.controller('listAccordion', [ '$scope', '$sce', function($scope, $sce){
  
  var getData = function() {
    var data = [
      {
        type: "build", // firewall, build
        id: "Tenrox-R1_1235",
        owner: "",
        startTimestamp: null,
        state: "pending", //pending, running, complete, rejected, accepted
        metrics: null,
        build: null,
        unitTest: null,
        functionalTest: null
      },
      {
        type: "firewall", // firewall, build
        id: "432462",
        owner: "jtuck",
        startTimestamp: 1397844720000,
        state: "running", //pending, running, complete, rejected, accepted
        metrics: {
          status: "running", // string - running, passed, failed
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
        type: "firewall", // firewall, build
        id: "432461",
        owner: "samy",
        startTimestamp: 1397839980000,
        state: "rejected", //pending, running, complete, rejected, accepted
        metrics: {
          status: "failed", // string - running, passed, failed
          test: 64,
          maintainability: 53,
          security: 64,
          worksmanship:72
        },
        build: {
          status: "passed", // string - running, passed, failed
          debug: true,
          release: true,
          buildTimestamp: 1397854200000,
        },
        unitTest: {
          status: "passed", // string - running, passed, failed
          numberpassed: 142,
          numberfailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          status: "passed", // string - running, passed, failed
          numberpassed: 4321,
          numberfailed: 2145,
          codeCovered: 23
        }
      },
      {
        type: "build", // firewall, build
        id: "Tenrox-R1_1234",
        owner: "",
        startTimestamp: 1397749320000,
        state: "complete", //pending, running, complete, rejected, accepted
        metrics: {
          status: "passed", // string - running, passed, failed
          test:64,
          maintainability: 53,
          security: 64,
          worksmanship:72
        },
        build: {
          status: "passed", // string - running, passed, failed
          debug: true,
          release: true,
          buildTimestamp: 1397764200000,
        },
        unitTest: {
          status: "passed", // string - running, passed, failed
          numberpassed: 142,
          numberfailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          status: "passed", // string - running, passed, failed
          numberpassed: 4321,
          numberfailed: 2145,
          codeCovered: 23
        }
      },
      {
        type: "firewall", // firewall, build
        id: "432460",
        owner: "samy",
        startTimestamp: 1397742660000,
        state: "rejected", //pending, running, complete, rejected, accepted
        metrics: {
          status: "failed", // string - running, passed, failed
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
        type: "firewall", // firewall, build
        id: "432459",
        owner: "samy",
        startTimestamp: 1397652180000,
        state: "accepted", //pending, running, complete, rejected, accepted
        metrics: {
          status: "passed", // string - running, passed, failed
          test: 64,
          maintainability: 53,
          security: 64,
          worksmanship:72
        },
        build: {
          status: "passed", // string - running, passed, failed
          debug: true,
          release: true,
          buildTimestamp: 1397753160000,
        },
        unitTest: {
          status: "passed", // string - running, passed, failed
          numberpassed: 142,
          numberfailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          status: "passed", // string - running, passed, failed
          numberpassed: 4321,
          numberfailed: 2145,
          codeCovered: 23
        }
      }
    ];
    return data
  };
  //
  // $scope.icons ={
  //   firewall: $sce.trustAsHtml('<i class="material-icons dp48">&#xe32a;</i>'),
  //   build: $sce.trustAsHtml('<i class="material-icons dp48">&#xe30a;</i>'),
  //   search:
  // };
  //
  $scope.getIcon = function (icon) {
    console.log(icon);
    var icons = {
        firewall: 'e32a',
        build: 'e30a',
        search: 'e8b6',
        pending: '',
        running: '',
        complete: 'e86c',
        accepted: 'e86c',
        passed: 'e86c',
        rejected: 'e000',
        failed: 'e000'
    };
    if (icon === "pending") {
      return $sce.trustAsHtml('<div class="pendingbox"></div>');
    } else if (icon === "running") {
      return $sce.trustAsHtml('<div class="runningbox"></div>');
    } else if (icon == null) {
      return $sce.trustAsHtml('<div class="pendingbox"></div>');
    } else {
      return $sce.trustAsHtml('<div class="col width-1of12 material-icons md-18">&#x' + icons[icon] + ';</div>');
    }
  }
  //
  $scope.changeList = getData();
}]);
