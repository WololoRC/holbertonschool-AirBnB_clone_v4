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


  function appendContent (newText, newId) {
    // Append content to @h4 field
    // @newText: checkbox @data-name content
    // @newId: checkbox @data-id content

    if (stringContent === '') {
      stringContent = newText;
    } else {
      stringContent = stringContent + ', ' + newText;
    }

    idDic[newText] = newId;

    return stringContent;
  }

  function removeContent (oldText) {
    // remove content from @h4 tag
    // @oldText: checkbox @data-name content
      if (stringContent.length === oldText.length) {
          stringContent = ''
      } else {
          stringContent = stringContent.replace(', ' + oldText, '');
      }

    return stringContent;
  }

  checkboxes.bind('click', function (event) {
    // Eventlistener, call function if @this.checked === true || false
    // if @this.checked === false remove his @data-id from @idDic
    const eventText = $(this).data('name');
    const eventId = $(this).data('id');

    if (this.checked === true) {
      fourAmenities.text(appendContent(eventText, eventId));
    } else {
      fourAmenities.text(removeContent(eventText));
      idDic[eventText] = null;
    }

  
  });
});
