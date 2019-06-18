var amenitiesArray = [];

$(".custom-control-input").on("click", function() {
  //console.log($(this).attr("data-check"));
  if ($(this).attr("data-check") === "false") {
    $(this).attr("data-check", "true");
  } else {
    $(this).attr("data-check", "false");
  }
});

$("#submit").on("click", function(event) {
  event.preventDefault();
  var amenitiesArray = [];
  if ($("#showers").attr("data-check") === "true") {
    amenitiesArray.push($("#showers").attr("id"));
  }
  if ($("#toilets").attr("data-check") === "true") {
    amenitiesArray.push($("#toilets").attr("id"));
  }
  if ($("#trash").attr("data-check") === "true") {
    amenitiesArray.push($("#trash").attr("id"));
  }
  if ($("#foodStorage").attr("data-check") === "true") {
    amenitiesArray.push($("#foodStorage").attr("id"));
  }
  if ($("#water").attr("data-check") === "true") {
    amenitiesArray.push($("#water").attr("id"));
  }
  if ($("#firewood").attr("data-check") === "true") {
    amenitiesArray.push($("#firewood").attr("id"));
  }

  var campQueryParams = {
    api_key: "IvDm5VJctJF8OHMsxVyrHXjVShQNgrTwYSbzQrYJ"
  };

  campQueryParams.q = $("#location")
    .val()
    .trim();
//   campQueryParams.fields = JSON.stringify(amenitiesArray);

 // console.log(campQueryParams);
// can't get the amenities array to function properly in the URL, but since they don't really functionally change the search results i think that's ok
  
// var parkName = $("#location").val().trim()

// var parkUrl = "https://developer.nps.gov/api/v1/parks?api_key=IvDm5VJctJF8OHMsxVyrHXjVShQNgrTwYSbzQrYJ&q=" + parkName

// $.ajax({
//   url: parkUrl,
//   method: "GET",
// }).then(function (response) {
//   var parkResults = response.data;
//   var parkCode = parkResults.parkCode
//   campQueryParams.parkCode = parkCode;
//   console.log("campQueryParams: ", campQueryParams)
// })


 
var campgroundUrl =
    "https://developer.nps.gov/api/v1/campgrounds?" + $.param(campQueryParams);

    $.ajax({
      url: campgroundUrl,
      method: "GET"
    }).then(function(response) {
      var campResults = response.data;
      console.log(campResults)

    })
});


var darkskyKey = "24ad87e96d744bd3fb31284ccc8763a1"
var weatherUrl = "https://api.darksky.net/forecast/" + darkskyKey + "/[latitude],[longitude],[time]"
var campQueryParams = {
    "api_key": "IvDm5VJctJF8OHMsxVyrHXjVShQNgrTwYSbzQrYJ",
}

function getWeather(lat, long, date) {
  latLongString =lat + "," + long + "," + date;
  $.ajax({
      method: 'GET',
      url: weatherUrl
  }).then(function (response){
  })

  $('#submit').on('click', function (event) {
      event.preventDefault();
      startDate = $('#start-date').val().trim();
      startMoment = moment(startDate, 'MM/DD/YYYY');
      endDate = $('#end-date').val().trim();
  
      $.ajax({
          method: 'GET',
          url: campgroundUrl
      }).then(function (response) {
          //loop through each campground
        // JSON.object
        // parkLatLong
          getWeather(latLong.lat, latLong.long, startDate);
      });
  
      // clear out values
      //$('#location').val('');