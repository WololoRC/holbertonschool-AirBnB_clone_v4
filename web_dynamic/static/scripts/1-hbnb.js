$(function () {
  // checkbox process
  const checkboxes = $("input[type='checkbox']");
  const fourAmenities = $('div.amenities > h4');
  let stringContent = '';
  let idDic = {};

  function appendContent (newText) {
    // Append content to @h4 field
    // @newText: checkbox @data-name content
    // @newId: checkbox @data-id content

    if (stringContent.length < 1) {
      stringContent = newText;
      return stringContent;

    } else {
      newText = ', ' + newText;
      stringContent = stringContent + newText;
      return stringContent;
    }

  }

  function removeContent(oldText) {
    // remove content from @h4 tag
    // @oldText: checkbox @data-name content


    if (stringContent.search(', ' + oldText) === -1) {
      stringContent = stringContent.replace(oldText, '');
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
      fourAmenities.text(appendContent(eventText));
      idDic[eventText] = eventId;
    } else {
      fourAmenities.text(removeContent(eventText));
      idDic[eventText] = null;
    }

    console.log(idDic);
  });
});
