app.directive('spotInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/spotInfo.html',
        link: function(scope, element, attrs) {
            const title = scope.info.title;  
            
            // Markers           
            const markerIcons = document.querySelectorAll(".leaflet-marker-icon");
            let allMarkers = [];
            allMarkers.push(...markerIcons);
            console.log(allMarkers);  
            const markerIndex = allMarkers.findIndex(element => element.title === scope.info.title);
                              
            scope.select = function() {
                element.toggleClass('selected');

                const activateMarker = function() {
                    if (!scope.info.isActive) {
                        scope.info.isActive = true;
                        allMarkers[markerIndex].style.opacity = "1";
                        allMarkers[markerIndex].style.filter = "grayscale(0)";                                        
                    } else {
                        scope.info.isActive = false;
                        allMarkers[markerIndex].style.opacity = "0.2";
                        allMarkers[markerIndex].style.filter = "grayscale(0.8)";
                    }
                };   
                
                switch (title) {
                    case "Jeffreys Bay": 
                        activateMarker();
                        break;
                    case "Kommetjie": 
                        activateMarker();
                        break;
                    case "Dungeons": 
                        activateMarker();
                        break;    
                    case "Elands Bay": 
                        activateMarker();
                        break;
                    case "Stillbaai": 
                        activateMarker();
                        break;
                    case "Victoria Bay": 
                        activateMarker();  
                        break;
                    case "Cape St Francis": 
                        activateMarker();
                        break;
                    case "Battery Beach": 
                        activateMarker();
                        break;
                    case "Strand": 
                        activateMarker();
                        break;
                    case "Big Bay": 
                        activateMarker();
                        break;
                    case "Nahoon Reef": 
                        activateMarker();
                        break;
                    case "Port Alfred": 
                        activateMarker();
                        break;
                    case "Coffee Bay": 
                        activateMarker();
                        break;
                };
            };
        }
    };
});