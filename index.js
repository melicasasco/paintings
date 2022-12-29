
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Mis marcadores
    var markers = [
        ['Borealis Hotel', 64.10126701756853, -20.99609778452001],
        ['Cascada 1 - Fotos', 63.620977489170286, -19.986448601741774],
        ['Cascada 2 - Fotos', 63.61572225049549, -19.988577363392817],
        ['Cascada 3 - Fotos', 63.53247242944348, -19.51098428971609],
        ['Cascada 4 - Fotos', 63.528422503899414, -19.48098729808273],
        ['Sky Lagoon', 64.11659680610528, -21.94631225938748],
        ['Lugar Caballos', 65.87978463647327, -23.490151377969372],
        ['Local Guide', 64.03960609131582, -16.906057420405293],
        ['Jökulsárlón', 64.08361011470328, -16.229457146244936],
        ['Dynjandi', 65.77400127747609, -23.17246384123386],
        ['Rauðisandur', 65.47649281455325, -23.991526803114322],
        ['Patreksfjörður', 65.59793640493947, -24.001844140986336],
        ['Hornstrandir', 66.40834333067811, -22.342878679688656],
        ['Látrabjarg', 65.50364212633131, -24.53041432474409],
        ['Hellulaug', 65.57486352771726, -23.171021127063764],
        ['Drumboddsstaðir River Base', 64.22918735392253, -20.28540975587186],
        ['Pool at Krossneslaug', 66.05581819190769, -21.50594982097642],
        ['Hólmavík', 65.70403930321704, -21.6854512817904],
        ['Naustahvilft - The Troll Seat', 66.06284225994806, -23.12127936935971],
        ['Hrísvaðsfoss', 65.70403930321704, -21.6854512817904],
        ['Litlibær', 65.98698720308289, -22.826575949030318],
        ['Tjöruhúsið', 66.06827892291705, -23.126808132298645],
        ['Önundarfjordur', 66.09063102736798, -23.613711172987625],
        ['Bíldudalskirkja Church', 65.68613740332154, -23.597642752867237],
        ['Balck Church', 64.82244990090761, -23.3846794518715],
    ];

                        
    // Info
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h2>Hotel gatitos</h2>' +
        '</div>'],
        ['<div class="info_content">' + '<p>Está a 128km de Reikiavik</p>' +
        '<h2>Gljufrafoss</h2>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h2>Seljalandsfoss</h2>'+ '<p>Está a 128km de Reikiavik</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h2>Skógafoss</h2>' + '<p>Está a 156km de Reikiavik</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h2>Kvernufoss - Cascada escondida</h2>' + '<p>Está a 156km de Reikiavik</p>' +
        '</div>' ],  
        ['<div class="info_content">' +
        '<h2>Sky Lagon</h2>' + '<p>Similar blue lagoon - a 15min aprox desde Reikiavik</p>' +
        '</div>' ],  
        ['<div class="info_content">' +
        '<h2>Simbahöllin</h2>' + '<p>Lugar de caballos, cafeteria https://www.instagram.com/simbahollin/</p>' +
        '</div>' ],  
        ['<div class="info_content">' +
        '<h2>Local Guide - Punto de encuentro</h2>' + '<p>excursiones</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Jökulsárlón</h2>' + '<p>Diamond Beach</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Dynjandi</h2>' + '<p>Cascada</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Rauðisandur</h2>' + '<p>Lugar de arena blanca!</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Patreksfjörður</h2>' + '<p>Recomendable parar aquí</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Hornstrandir</h2>' + '<p>Reserva Natural impresionante. Hornstrandir Nature Reserve has been uninhabited since the 1950s and is perfect for hiking. It has high bird cliffs at bay of Hornvík and most areas can only really be reached by boat from Ísafjörður. It’s isolation means that it is the undisturbed home to arctic foxes who can be seen living in their natural environment if you are very lucky.</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Látrabjarg</h2>' + '<p>Acantilados. Acá podemos encontrar los puffins</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Hellulaug</h2>' + '<p>Hot Springs </p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Artic Rafting</h2>' + '<p>Punto de encuentro para hacer rafting en Golden Circle https://arcticrafting.com/</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Pool at Krossneslaug</h2>' + '<p>Pileta con vistas al mar</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Hólmavík</h2>' + '<p>Buen punto para parar. Hólmavík is the most easterly town in Westfjords</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Naustahvilft - The Troll Seat</h2>' + '<p>¡Cuenta la leyenda que un troll gigante se sentó allí para descansar y dejó esta huella de culo realmente enorme! La subida es empinada pero la vista vale la pena!!!Pequeño estacionamiento justo al pie.Se dice que un Troll gigante se sentó allí a descansar, dejando este enorme pozo en la montaña. Es una caminata empinada, pero la vista sobre el fiordo e Ísafjörður definitivamente vale la pena. Estacionamiento al inicio de la caminata.</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Hrísvaðsfoss</h2>' + '<p>Alta cascada</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Litlibær</h2>' + '<p>Zona de lobitos marinos</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Tjöruhúsið</h2>' + '<p>Según un blog es un muy restaurant. For a completely different experience the amazing Tjöruhúsið restaurant on the edge of the harbour is a must visit for anyone passing through Ísafjörður, but you really do need to book in advance. The town also has the oldest buildings in Iceland which are now a museum.Whale watching in Ísafjörður is also big business and if you want a quieter experience away from Reykjavík or Húsavík, then Ísafjörður is definitely worth considering. It is also the place to pick up a boat out to Hornstrandir Nature Reserve.</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Önundarfjordur</h2>' + '<p>Por acá más playas de arenas blancas.</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Bíldudalskirkja church</h2>' + '<p>Bonita iglesia. Cerca hay un museo de monstruos vistos por la zona.</p>' +
        '</div>' ],
        ['<div class="info_content">' +
        '<h2>Black church</h2>' + '<p>Tiene una linda playa.</p>' +
        '</div>' ]

    ];
        
    // Marcadores en el mapa
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
      
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Agregar info a marcadores
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Centrar
        map.fitBounds(bounds);
    }

    // ZOOM
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(6);
        google.maps.event.removeListener(boundsListener);
    });
}

window.initMap = initMap;