app.directive('spotInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/spotInfo.html',
        link: function(scope, element, attrs) {
            let toggle = false;
            let markerIcon = document.querySelector(".leaflet-marker-icon");
            
            
            scope.view = function() {
                element.toggleClass('selected');
                
                if (!toggle) {
                    markerIcon.style.opacity = '1';
                    markerIcon.style.filter = "grayscale(0)";
                    toggle = true;
                } else {
                    markerIcon.style.opacity = '0.4';
                    markerIcon.style.filter = "grayscale(0.8)";
                    toggle = false;
                };
            };
        }
    }
});