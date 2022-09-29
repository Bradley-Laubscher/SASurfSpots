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
            message: "Jeffreys Bay",
            img: "../../images/Jeffreys-Bay.webp",
            isActive: false,
        },
        {
            lat: -34.136998,
            lng: 18.327325,
            message: "Kommetjie",
            img: "../../images/Kommetjie.jpg",
            isActive: false,
        },
        {
            lat: -34.047104,  
            lng: 18.354142,
            message: "Dungeons",
            img: "../../images/Dungeons.jpg",
            isActive: false,
        },
        {
            lat: -32.312679, 
            lng: 18.330055,
            message: "Elands Bay",
            img: "../../images/Elands-Bay.jpg",
            isActive: false,
        },
        {
            lat: -34.376042,  
            lng: 21.429591,
            message: "Stillbaai",
            img: "../../images/Stillbaai.jpg",
            isActive: false,
        },
        {
            lat: -34.004923,  
            lng: 22.549891,
            message: "Victoria Bay",
            img: "../../images/Victoria-Bay.jpg",
            isActive: false,
        },
        {
            lat: -34.205817,   
            lng: 24.834960,
            message: "Cape St Francis",
            img: "../../images/Cape-St-Francis.jpg",
            isActive: false,
        },
        {
            lat: -29.839000,    
            lng: 31.037936,
            message: "Battery Beach",
            img: "../../images/Battery-Beach.jpg",
            isActive: false,
        },
        {
            lat: -34.107893,  
            lng:  18.816643,
            message: "Strand",
            img: "../../images/Strand.jpg",
            isActive: false,
        },
        {
            lat: -33.793685,  
            lng:  18.456330,
            message: "Big Bay",
            img: "../../images/Big-Bay.jpg",
            isActive: false,
        },
        {
            lat: -32.995888,   
            lng:  27.951894,
            message: "Nahoon Reef",
            img: "../../images/Nahoon-Reef.jpg",
            isActive: false,
        },
        {
            lat: -33.599121,   
            lng:  26.906256,
            message: "Port Alfred",
            img: "../../images/Port-Alfred.jpg",
            isActive: false,
        },
        {
            lat: -31.984297,  
            lng:  29.151997,
            message: "Coffee Bay",
            img: "../../images/Coffee-Bay.jpg",
            isActive: false,
        },
    ];
}]);