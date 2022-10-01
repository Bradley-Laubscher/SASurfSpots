app.directive('spotInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/spotInfo.html',
        link: function(scope, element, attrs) {
            const markerIcons = document.querySelectorAll(".leaflet-marker-icon");
            let allMarkers = [];
            allMarkers.push(...markerIcons);

            scope.select = function() {
                element.toggleClass('selected');
                const message = scope.info.message;
      
                // const markerIndex = allMarkers.indexOf(message);

                // const markerStyle = function() {
                //     if (!scope.info.isActive) {
                //         allMarkers[markerIndex].style.opacity = "1";
                //         allMarkers[markerIndex].style.filter = "grayscale(0)";
                //         scope.info.isActive = true;
                //     } else {
                //         allMarkers[markerIndex].style.opacity = "0.2";
                //         allMarkers[markerIndex].style.filter = "grayscale(0.8)";
                //         scope.info.isActive = false;
                //     }
                // };          
                
                switch (message) {
                    case "Jeffreys Bay": 
                        if (!scope.info.isActive) {
                            allMarkers[0].style.opacity = "1";
                            allMarkers[0].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[0].style.opacity = "0.2";
                            allMarkers[0].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Kommetjie": 
                        if (!scope.info.isActive) {
                            allMarkers[1].style.opacity = "1";
                            allMarkers[1].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[1].style.opacity = "0.2";
                            allMarkers[1].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Dungeons": 
                        if (!scope.info.isActive) {
                            allMarkers[2].style.opacity = "1";
                            allMarkers[2].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[2].style.opacity = "0.2";
                            allMarkers[2].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;    
                    case "Elands Bay": 
                        if (!scope.info.isActive) {
                            allMarkers[3].style.opacity = "1";
                            allMarkers[3].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[3].style.opacity = "0.2";
                            allMarkers[3].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Stillbaai": 
                        if (!scope.info.isActive) {
                            allMarkers[4].style.opacity = "1";
                            allMarkers[4].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[4].style.opacity = "0.2";
                            allMarkers[4].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Victoria Bay": 
                        if (!scope.info.isActive) {
                            allMarkers[5].style.opacity = "1";
                            allMarkers[5].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[5].style.opacity = "0.2";
                            allMarkers[5].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Cape St Francis": 
                        if (!scope.info.isActive) {
                            allMarkers[6].style.opacity = "1";
                            allMarkers[6].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[6].style.opacity = "0.2";
                            allMarkers[6].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Battery Beach": 
                        if (!scope.info.isActive) {
                            allMarkers[7].style.opacity = "1";
                            allMarkers[7].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[7].style.opacity = "0.2";
                            allMarkers[7].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Strand": 
                        if (!scope.info.isActive) {
                            allMarkers[8].style.opacity = "1";
                            allMarkers[8].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[8].style.opacity = "0.2";
                            allMarkers[8].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Big Bay": 
                        if (!scope.info.isActive) {
                            allMarkers[9].style.opacity = "1";
                            allMarkers[9].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[9].style.opacity = "0.2";
                            allMarkers[9].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Nahoon Reef": 
                        if (!scope.info.isActive) {
                            allMarkers[10].style.opacity = "1";
                            allMarkers[10].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[10].style.opacity = "0.2";
                            allMarkers[10].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Port Alfred": 
                        if (!scope.info.isActive) {
                            allMarkers[11].style.opacity = "1";
                            allMarkers[11].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[11].style.opacity = "0.2";
                            allMarkers[11].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                    case "Coffee Bay": 
                        if (!scope.info.isActive) {
                            allMarkers[12].style.opacity = "1";
                            allMarkers[12].style.filter = "grayscale(0)";
                            scope.info.isActive = true;
                        } else {
                            allMarkers[12].style.opacity = "0.2";
                            allMarkers[12].style.filter = "grayscale(0.8)";
                            scope.info.isActive = false;
                        };
                        break;
                };
            };
        }
    };
});