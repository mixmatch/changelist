//Item format
// {
//   type: "", // string - firewall, build
//   id: "", // string - build ID
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
.controller('listAccordion', [ '$scope', '$modal', '$sce', function($scope, $modal, $sce){
  // Stub for backend JSON server
  // Returned value gets populated to Angular UI
  var getData = function() {
    var data = [
      {
        type: "build",
        id: "Tenrox-R1_1235",
        owner: "",
        startTimestamp: null,
        state: "pending",
        metrics: null,
        build: null,
        unitTest: null,
        functionalTest: null
      },
      {
        type: "firewall",
        id: "432462",
        owner: "jtuck",
        startTimestamp: 1397844720000,
        state: "running",
        metrics: {
          status: "running",
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
        type: "firewall",
        id: "432461",
        owner: "samy",
        startTimestamp: 1397839980000,
        state: "rejected",
        metrics: {
          status: "failed",
          test: 64,
          maintainability: 53,
          security: 64,
          worksmanship:72
        },
        build: {
          status: "passed",
          debug: true,
          release: true,
          buildTimestamp: 1397854200000,
        },
        unitTest: {
          status: "passed",
          numberpassed: 142,
          numberfailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          status: "passed",
          numberpassed: 4321,
          numberfailed: 2145,
          codeCovered: 23
        }
      },
      {
        type: "build",
        id: "Tenrox-R1_1234",
        owner: "",
        startTimestamp: 1397749320000,
        state: "complete",
        metrics: {
          status: "passed",
          test:71,
          maintainability: 82,
          security: 87,
          worksmanship:93
        },
        build: {
          status: "passed",
          debug: true,
          release: true,
          buildTimestamp: 1397764200000,
        },
        unitTest: {
          status: "passed",
          numberpassed: 142,
          numberfailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          status: "passed",
          numberpassed: 4321,
          numberfailed: 2145,
          codeCovered: 23
        }
      },
      {
        type: "firewall",
        id: "432460",
        owner: "samy",
        startTimestamp: 1397742660000,
        state: "rejected",
        metrics: {
          status: "failed",
          test: 43,
          maintainability: 30,
          security: 48,
          worksmanship:60
        },
        build: null,
        unitTest: null,
        functionalTest: null
      },
      {
        type: "firewall",
        id: "432459",
        owner: "samy",
        startTimestamp: 1397652180000,
        state: "accepted",
        metrics: {
          status: "passed",
          test: 77,
          maintainability: 93,
          security: 86,
          worksmanship:96
        },
        build: {
          status: "passed",
          debug: true,
          release: true,
          buildTimestamp: 1397753160000,
        },
        unitTest: {
          status: "passed",
          numberpassed: 142,
          numberfailed: 10,
          codeCovered: 76
        },
        functionalTest: {
          status: "passed",
          numberpassed: 4321,
          numberfailed: 2145,
          codeCovered: 23
        }
      }
    ];
    return data
  };
  // Shows Angular UI Modal Window
  // Not working in IE8
  var showModal = function (template, item) {
    var modalInstance = $modal.open({
      animation: true,
      templateUrl: template,
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        item: function () {
          return item;
        }
      }
    });
  }
  // Metrics Details Modal
  $scope.showMetricsDetails = function (metrics) {
    console.log(metrics);
    if (metrics !== null && metrics.status !== 'running'){
      showModal('modalMetricsDetails.html', metrics);
    }
  }
  // Build Details Modal
  $scope.showBuildDetails = function (build) {
    console.log(build);
    if (build !== null && build.status !== 'running'){
      showModal('modalBuildDetails.html', build);
    }
  }
  // Unit Test Details Modal
  $scope.showUnitTestDetails = function (unitTest) {
    console.log(unitTest);
    if (unitTest !== null && unitTest.status !== 'running'){
      showModal('modalUnitTestDetails.html', unitTest);
    }
  }
  // Functional Test Details Modal
  $scope.showFunctionalTestDetails = function (functionalTest) {
    console.log(functionalTest);
    if (functionalTest !== null && functionalTest.status !== 'running'){
      showModal('modalFunctionalTestDetails.html', functionalTest);
    }
  }
  // Generates Icons using Google Material Icon font
  // Working IE8 native but not using F12 compatibility mode
  $scope.getIcon = function (icon) {
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
  // Fetch Data to populate page
  $scope.changeList = getData();
}]);
// Modal controller to pass item variable to modal scope
angular.module('app')
.controller('ModalInstanceCtrl', function ($scope, $modalInstance, item) {
  $scope.item = item;
});
