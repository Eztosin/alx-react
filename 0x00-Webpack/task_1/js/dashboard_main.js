import $ from 'jquery';
import _ from 'lodash';

/*
* updateCounter - tracks the number of times the button element
* has been clicked.
*/

$(document).ready(function () {
    // Create elements
    $('<p>Holberton Dashboard</p>').appendTo('body');
    $('<p>Dashboard data for the students</p>').appendTo('body');
    $('<button>Click here to get started</button>').appendTo('body').click(_.debounce(updateCounter, 1000));
    $('<p id="count"></p>').appendTo('body');
    $('<p>Copyright - Holberton School</p>').appendTo('body');

    let count = 0;
    function updateCounter() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }
});
