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

            scope.scroll = function(event) {
                if (!event.deltaY) {
                    return;
                };
                
                event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
                event.preventDefault();
            }
        }
    }
});





// dont know if I can change color - markers are imported icons - wthout css properties
// iconSize is a property used to scale the size of the icons.