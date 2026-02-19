// var user="Admin";
// function greetUser(){
//     console.log("Hello, " + user + "!");
// }
// greetUser();
// let age=4/'horse';
// console.log("Age is: " + age);
let coordinates = [
    { name: "Mumbai", x: 19.0760, y: 72.8777 },
    { name: "Delhi", x: 28.6139, y: 77.2090 },
    { name: "Bengaluru", x: 12.9716, y: 77.5946 },
    { name: "Kolkata", x: 22.5726, y: 88.3639 },
    { name: "Chennai", x: 13.0827, y: 80.2707 }
];
let map=L.map('map',{
    center:[20.5937, 78.9629],
    zoom:4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const hoverIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [30, 49],
    iconAnchor: [15, 49],
    popupAnchor: [1, -40],
    shadowSize: [46, 46]
});

function cityImage(cityName) {
    return "https://picsum.photos/seed/" + encodeURIComponent(cityName) + "/280/140";
}

function popupHtml(city) {
    return (
        '<div style="width:280px;">' +
        '<h3 style="font-weight:700;font-size:16px;margin:0 0 8px;">' + city.name + "</h3>" +
        '<img src="' + cityImage(city.name) + '" alt="' + city.name + ' image" ' +
        'style="width:100%;height:140px;object-fit:cover;border-radius:8px;margin-bottom:8px;" />' +
        '<p style="margin:0 0 8px;font-size:13px;line-height:1.35;">' +
        'Problem statement: Heavy traffic and air pollution are major concerns in ' + city.name +
        '. Propose one practical city-level solution that can reduce congestion in 6 months.' +
        "</p>" +
        '<button class="btn btn-sm btn-primary review-btn" data-city="' + city.name + '">' +
        "Review</button>" +
        "</div>"
    );
}

let mark=function(conrdinate){
    const marker=L.marker([conrdinate.x, conrdinate.y], { icon: defaultIcon, riseOnHover: true, riseOffset: 350 })
        .addTo(map)
        .bindPopup(popupHtml(conrdinate));

    marker.on('mouseover', function () {
        marker.setIcon(hoverIcon);
        marker.setZIndexOffset(1000);
    });

    marker.on('mouseout', function () {
        marker.setIcon(defaultIcon);
        marker.setZIndexOffset(0);
    });
}
coordinates.forEach(mark);

map.on("popupopen", function (event) {
    const popupElement = event.popup.getElement();
    if (!popupElement) return;
    const reviewBtn = popupElement.querySelector(".review-btn");
    if (!reviewBtn) return;
    reviewBtn.addEventListener("click", function () {
        const cityName = reviewBtn.getAttribute("data-city") || "this city";
        alert("Review submitted for " + cityName + ".");
    }, { once: true });
});
