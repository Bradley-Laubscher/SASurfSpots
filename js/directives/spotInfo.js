app.directive('spotInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/spotInfo.html',
        // link: function(scope, element, attrs) {
        //     scope.buttonText = "View Spot",
        //     scope.viewed = false,

        //     scope.view = function() {
        //         element.toggleClass('btn-active');
        //         if (scope.viewed) {
        //             scope.buttonText = "view Spot";
        //             scope.viewed = false;
        //         } else {
        //             scope.buttonText = "Back";
        //             scope.viewed = true;
        //         }
        //     }
        // }
    };
});