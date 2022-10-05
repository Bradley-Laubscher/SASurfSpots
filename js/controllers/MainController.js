app.controller('MainController', ['$scope', function($scope) {
    
    $scope.mapCenter = {
        lat: -31.131285,
        lng: 24.300093,       
        zoom: 5,
    };

    $scope.mapMarkers = [
        {
            title: "Jeffreys Bay",
            lat: -34.030868,
            lng: 24.932402,
            message: "Jeffreys Bay as a surfing destination was made famous by Bruce Brown's movie: The Endless Summer. It's all about a powerful, fast right-hand point break admired by surfers from all corners of the world.",
            img: "../../images/Jeffreys-Bay.webp",
            isActive: false,
        },
        {
            title: "Kommetjie",
            lat: -34.136998,
            lng: 18.327325,
            message: "Kommetjie: The area is a popular spot for surfing, since powerful waves from the Atlantic Ocean rise up over rocky reefs formed by hard sandstones of the Table Mountain Group.",
            img: "../../images/Kommetjie.jpg",
            isActive: false,
        },
        {
            title: "Dungeons",
            lat: -34.047104,  
            lng: 18.354142,
            message: "Dungeons: Big right-hand reef break of the Sentinel at Hout Bay, usually surfed by tow-in. Starts breaking at eight to ten ft.",
            img: "../../images/Dungeons.jpg",
            isActive: false,
        },
        {
            title: "Elands Bay",
            lat: -32.312679, 
            lng: 18.330055,
            message: "Elands Bay: It is a world class surfing location and is also noted for its caves, which have a number of rock paintings.",
            img: "../../images/Elands-Bay.jpg",
            isActive: false,
        },
        {
            title: "Stillbaai",
            lat: -34.376042,  
            lng: 21.429591,
            message: "Stillbaai in Boland and Southern Cape is an exposed point break that has fairly consistent surf.",
            img: "../../images/Stillbaai.jpg",
            isActive: false,
        },
        {
            title: "Victoria Bay",
            lat: -34.004923,  
            lng: 22.549891,
            message: "Victoria Bay: It is a popular beach for surfers, consisting of a right hand reef-like wave which rolls over small boulder-like rocks for about 200m. District and National surf competitions are often held at Vic Bay and despite its small size, Vic Bay is a well-known and much-visited spot.",
            img: "../../images/Victoria-Bay.jpg",
            isActive: false,
        },
        {
            title: "Cape St Francis",
            lat: -34.205817,   
            lng: 24.834960,
            message: "Cape St. Francis is now known as one of the best surfing locations. Given its geological location, it is susceptible to swell year round from large low pressure systems that form between Antarctica and the southern tip of Africa. When large south west swells wrap around Seal Point and the prevailing offshore winds come up, the surfing is world class.",
            img: "../../images/Cape-St-Francis.jpg",
            isActive: false,
        },
        {
            title: "Battery Beach",
            lat: -29.839000,    
            lng: 31.037936,
            message: "Battery Beach is an exposed beach break that has fairly consistent surf. Winter is the best time of year for surfing here.",
            img: "../../images/Battery-Beach.jpg",
            isActive: false,
        },
        {
            title: "Strand",
            lat: -34.107893,  
            lng:  18.816643,
            message: "Strand: The beachbreak at Strand gets quite good, but several outside reefs and other waves make the entire area really interesting. The Strand is usually a small-wave spot, as it doesn’t pick up that much swell.",
            img: "../../images/Strand.jpg",
            isActive: false,
        },
        {
            title: "Big Bay",
            lat: -33.793685,  
            lng:  18.456330,
            message: "Big Bay in Western Cape is an exposed beach break that has reasonably consistent surf and can work at any time of the year.The beach breaks offer lefts and rights. Good surf at all stages of the tide.",
            img: "../../images/Big-Bay.jpg",
            isActive: false,
        },
        {
            title: "Nahoon Reef",
            lat: -32.995888,   
            lng:  27.951894,
            message: "Nahoon Reef waves break on a point and can get quite large, but the sheer power and speed derived from the waves is quite spectacular.",
            img: "../../images/Nahoon-Reef.jpg",
            isActive: false,
        },
        {
            title: "Port Alfred",
            lat: -33.599121,   
            lng:  26.906256,
            message: "Port Alfred: The best time of year for surfing East Pier (Port Alfred) with consistent clean waves (rideable swell with light / offshore winds) is during Winter and most often the month of June.",
            img: "../../images/Port-Alfred.jpg",
            isActive: false,
        },
        {
            title: "Coffee Bay",
            lat: -31.984297,  
            lng:  29.151997,
            message: "Coffee Bay main beach consists of a point and beach break. Coffee Bay Point usually offers a gentle smooth ride right breaking wave which is ideal for beginners looking to catch their first green wave. Whilst Coffee Bay Beach break can be more variable with waves suited for all levels of surfing.",
            img: "../../images/Coffee-Bay.jpg",
            isActive: false,
        },
    ];
}]);