app.controller('MainController', ['$scope', function($scope) {
    
    $scope.mapCenter = {
        lat: -31.131285,
        lng: 24.300093,       
        zoom: 5,
    };

    $scope.mapMarkers = [
        {
            lat: -34.030868,
            lng: 24.932402,
            name: "Jeffreys Bay",
            img: "../../images/Jeffreys-Bay.webp"
        },
        {
            lat: -34.136998,
            lng: 18.327325,
            name: "Kommetjie",
            img: "../../images/Kommetjie.jpg"
        },
        {
            lat: -34.047104,  
            lng: 18.354142,
            name: "Dungeons",
            img: "../../images/Dungeons.jpg"
        },
        {
            lat: -32.312679, 
            lng: 18.330055,
            name: "Elands Bay",
            img: "../../images/Elands-Bay.jpg"
        },
        {
            lat: -34.376042,  
            lng: 21.429591,
            name: "Stillbaai",
            img: "../../images/Stillbaai.jpg"
        },
        {
            lat: -34.004923,  
            lng: 22.549891,
            name: "Victoria Bay",
            img: "../../images/Victoria-Bay.jpg"
        },
        {
            lat: -34.205817,   
            lng: 24.834960,
            name: "Cape St Francis",
            img: "../../images/Cape-St-Francis.jpg"
        },
        {
            lat: -29.839000,    
            lng: 31.037936,
            name: "Battery Beach",
            img: "../../images/Battery-Beach.jpg"
        },
        {
            lat: -34.107893,  
            lng:  18.816643,
            name: "Strand",
            img: "../../images/Strand.jpg"
        },
        {
            lat: -33.793685,  
            lng:  18.456330,
            name: "Big Bay",
            img: "../../images/Big-Bay.jpg"
        },
        {
            lat: -32.995888,   
            lng:  27.951894,
            name: "Nahoon Reef",
            img: "../../images/Nahoon-Reef.jpg"
        },
        {
            lat: -33.599121,   
            lng:  26.906256,
            name: "Port Alfred",
            img: "../../images/Port-Alfred.jpg"
        },
        {
            lat: -31.984297,  
            lng:  29.151997,
            name: "Coffee Bay",
            img: "../../images/Coffee-Bay.jpg"
        },

    ];
}]);