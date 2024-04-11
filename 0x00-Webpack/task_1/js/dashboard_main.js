function updateCounter() {
    import $ from 'jquery';
    import _ from 'lodash';

    /*
    * updateCounter - tracks the number of times the button element
    * has been clicked.
    */
    const updateCounterDebounced = _.debounce(() => {
        let count = parseInt($('#count').text()) || 0;
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }, 300);

    $(document).ready(() => {
        $('<p/>', { text: 'Holberton Dashboard' }).appendTo('body');
        $('<p/>', { text: 'Dashboard data for the students' })
            .appendTo('body');
        $('<button/>', { text: 'Click here to get started' })
            .appendTo('body').on('click', updateCounterDebounced);
        $('<p/>', { id: 'count' }).appendTo('body');
        $('<p/>', { text: 'Copyright - Holberton School' })
            .appendTo('body');
    });
}

updateCounter();
