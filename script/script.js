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

        table +='</table>';

        $('.Board').html(table);

        function addWalls() {

            let allTiles = document.getElementsByTagName('td');
            

            for (let i=0; i<5; i++) {

                let x = Math.floor(Math.random()*allTiles.length);
                
                $('td').eq(x).addClass('Wall');

            }

        };

        addWalls();

    });

});
