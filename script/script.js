$(document).ready(function() {

    $('.button').click(function() {

        let rows = 5;
        let columns = 5;
        let table = '<table class="GameBoard" border="1">';

        for (let i=0; i<rows; i++) {

            table += '<tr>';

            for (let j=0; j<columns; j++) {

                table +='<td>';
                table +='R:' + i + ' C:' + j;
                table +='</td>';
            }

            table += '</tr>';
        }

        function addWalls() {

            let allTiles = $('tr td');
            
            for (let i=0; i>5; i++) {

                x = Math.floor(Math.random()*allTiles.length);
                $('td'[x]).addClass('Wall');

            }

        }

        addWalls();
        table +='</table>';
        $('.Board').html(table);

    });
});