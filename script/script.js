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

        function addElements() {

            let allTiles = document.getElementsByTagName('td');

            function randomTile() {
                return Math.floor(Math.random()*allTiles.length);
            }
            
            for (let i=0; i<5; i++) {

                let x = randomTile();
                
                if ($('td').eq(x).hasClass('Wall')) {

                    i -= 1;

                } else {

                    $('td').eq(x).addClass('Wall');

                }

            }

            for (let j=0; j<5; j++) {

                let y = randomTile();

                if ($('td').eq(y).hasClass('Wall') || $('td').eq(y).hasClass('Cash')) {

                    j -= 1;

                } else {

                    $('td').eq(y).replaceWith('<td class="Cash">£60</td>');

                }

            }

            for (let k=0; k<1; k++) {

                let z = randomTile();

                if($('td').eq(z).hasClass('Wall') || $('td').eq(z).hasClass('Cash')) {

                    k -= 1;

                } else {

                    $('td').eq(z).replaceWith('<td class="Player">O_O</td>');

                }

            }

        };

        addElements();

    });

    $(document.getElementsByClassName('Player')).keydown(function(e) {

        switch(e.which) {

            case 37: //Left
                
            break;

            case 38: //Up

            break;

            case 39: //Right

            break;

            case 40: //Down

            break;

            default: return;

        }

        e.preventDefault();

    })

});
