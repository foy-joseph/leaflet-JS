alert('ok DOM loaded');

let map = L.map('map').setView([54.9516, -7.702], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: `&copy; <a
    href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`
}).addTo(map);

// let marker1 = L.marker([54.9516, -7.702]).addTo(map);
// let marker2 = L.marker([54.9416, -7.712]).addTo(map);

// marker1.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// marker2.bindPopup("<b>Hello world!</b><br>I am also a popup.").openPopup();


let errigalIcon = L.icon({ iconUrl: "errigal.png", iconSize: [40, 50] });
let errigal = L.marker([55.0343, -8.113],
    { icon: errigalIcon, title: 'Errigal', alt: "Errigal"}
).addTo(map);

let atuIcon = L.icon({ iconUrl: "ATU.png", iconSize: [40, 50] });
let atu = L.marker([54.9522, -7.7209],
    { icon: atuIcon, title: 'ATU', alt: "ATU"}
).addTo(map);


//port bridge, past atu and then through ballyraine,
let polyLine = L.polygon([
    [54.948422, -7.714710],
    [54.951264, -7.7225],
    [54.953457, -7.729109],
    [54.954123, -7.728679],
    [54.954640, -7.725675],
    [54.954344, -7.723229],
    [54.952126, -7.715333]

    ]).addTo(map);
    