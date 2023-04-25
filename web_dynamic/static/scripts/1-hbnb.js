$(function () {
  // checkbox process
  const checkboxes = $("input[type='checkbox']");
  const fourAmenities = $('div.amenities > h4');
  let stringContent = '';
  let idDic = {};

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

    console.log(idDic);
  });
});
