var xhr = new XMLHttpRequest();

xhr.onload = function() {

    if(xhr.status === 200) {

        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';

        for(var i = 0; i < responseObject.length; i++) {

            newContent += '<div class="items">';
            newContent +=   '<img src="' + responseObject.items[i].logo + '"';
            newContent +=   'alt="' + responseObject.items[i].category + '"/>';
            newContent += '<p><b>' + responseObject.items[i].category + '</b></p>';
            newContent += '</div>';
        }

        document.getElementById('content').innerHTML = newContent;
    }
};

xhr.open('GET', 'data/myData.json', true);
xhr.send(null);