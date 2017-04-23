function createMap(size) {
    var cellId = 0

    for(var i = 0; i < size; i++) {
        var $row = $('<div>')

        $row.addClass('row')

        for(var j = 0; j < size; j++) {
            var $cell = $('<div>')

            $cell.addClass('cell')
            $cell.addClass('water')
            $cell.attr('id', cellId)
            $cell.attr('data-id', cellId)

            $row.append($cell)

            cellId++
        }

        $('main').append($row)
    }
}

createMap(25)

$('main').on('mouseover', '.cell', function(e) {
    var $cell = $(this)

    $cell.removeClass('water')
    $cell.addClass('land')
})