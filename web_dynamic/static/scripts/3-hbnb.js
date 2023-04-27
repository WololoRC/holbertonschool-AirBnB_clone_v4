$(function () {
  const checkboxes = $("input[type='checkbox']");
  const fourAmenities = $('div.amenities > h4');
  let stringContent = '';

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status === 'success') {
      $('div#api_status').addClass('available');
      $('.available').css('background-color', '#ff545f')
    }
  });

  $.ajax('http://0.0.0.0:5001/api/v1/places_search', {
    data: JSON.stringify({}),
    contentType: 'application/json',
    type: 'POST',
    success: function (data) {
      let cnt = 0;

    for (let place of data) {
      if (cnt > 155) {
        break;
      }
      let aVar = `<article>
          <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${place.max_guest}</div>
            <div class="number_rooms">${place.number_rooms}</div>
            <div class="number_bathrooms">${place.number_bathrooms}</div>
          </div>
          <div class="user">
            <b>Owner:</b>
          </div>
          <div class="description">${place.description}</div>
        </article>`
      
      $('.places').append(aVar)
      cnt += 1;
    }
    }
  });
  });