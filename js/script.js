$(function() {

    $('img').on('mouseover', function(){
        $(this).parent('div').css({position:'relative'});
        var img = $(this);
        var backs = $(this).next('div').css('background-color');
        var tech = $(this).next('div').text();
        var adr = $(this).parent('a').attr('href');
        var center = ($(this).parents('div').outerWidth() - img.width()) / 2;
        var paddingForText = ($(this).height()) / 4;
        var fontSize = ($(this).height()) / 8;
        
        $('<div />').text(tech).css({
            'font-size': fontSize,
            'text-decoration': 'none',
        	'color': 'white',
        	'text-align': 'center',
        	'padding-top': paddingForText,
            'height': img.height(),
            'width': img.width(),
            'background-color': backs,
            'position': 'absolute',
            'top': 0,
            'left': center + 10,
            'opacity': 0.0
        }).on('mouseout', function(){
            $(this).fadeOut('1000', function(){
                $(this).remove();
            });
        }).insertAfter(this).animate({
            'opacity': 0.9
        }, '1000');
    });
});




function initialize() {
    var latlng = new google.maps.LatLng(51.5224134, 0.0314821);
    var settings = {
    zoom: 17,
    center: new google.maps.LatLng(51.5219134, 0.0306821),
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADTYPE
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), 
    settings);
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'Our Studio'
    });
    marker.setMap(map);
};
initialize();