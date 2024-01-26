// Wait for the document to be ready before making call
$(document).ready(function () {
    // Make a GET request to the JSON API using jQuery's .getJSON method
    $.getJSON("schedule.json", function (data) {
        // Store the schedule data in a global variable
        let myScheduleData = data.mySchedule;
        let ethanScheduleData = data.ethanSchedule;
        let samScheduleData = data.samSchedule;
        // Populate the table with all the schedule data
        console.log(myScheduleData, ethanScheduleData, samScheduleData);
        populateTable(myScheduleData, ethanScheduleData, samScheduleData);

        // Listen for changes to the dropdown menu
        $('#day-selector').on('change', function() {
            // Get selected day
            let selectedDay = $(this).val();

            // Filter the schedule data based on the selected day
            let myFilteredData = myScheduleData.filter( function (mySchedule) {
                return selectedDay === 'all' || mySchedule.days.includes(selectedDay);
            })
            let ethanFilteredData = ethanScheduleData.filter(function (ethanSchedule) {
                return selectedDay === 'all' || ethanSchedule.days.includes(selectedDay);
            })
            let samFilteredData = samScheduleData.filter(function (samSchedule) {
                return selectedDay === 'all' || samSchedule.days.includes(selectedDay);
            })
        })
    });
    // Function to populate the table with schedule data
    function populateTable(myScheduleData, ethanScheduleData, samScheduleData) {
        $('#schedule-table.body').empty();

        // Iterate over each object on the schedule Data array
        $.each(myScheduleData, function (i, schedule) {
            // Create a new row in the table
            let row = "<tr>";
            // Add the class name, teacher name, room number, and days to the row
            row += "<td>" + schedule.class_name + '</td>';
            row += '<td>' + schedule.teacher_name + '</td>'
            row += '<td>' + schedule.room_number + '</td>'
            row += '<td>' + schedule.days.join(', ') + '</td>'
            row += '</tr>'

            $('#schedule-table-body').append(row)
        })
        $.each(ethanScheduleData, function (i, schedule) {
            // Create a new row in the table
            let row = "<tr>";
            // Add the class name, teacher name, room number, and days to the row
            row += "<td>" + schedule.class_name + '</td>';
            row += '<td>' + schedule.teacher_name + '</td>'
            row += '<td>' + schedule.room_number + '</td>'
            row += '<td>' + schedule.days.join(', ') + '</td>'
            row += '</tr>'

            $('#schedule-table-body').append(row)
        })
        $.each(samScheduleData, function (i, schedule) {
            // Create a new row in the table
            let row = "<tr>";
            // Add the class name, teacher name, room number, and days to the row
            row += "<td>" + schedule.class_name + '</td>';
            row += '<td>' + schedule.teacher_name + '</td>'
            row += '<td>' + schedule.room_number + '</td>'
            row += '<td>' + schedule.days.join(', ') + '</td>'
            row += '</tr>'

            $('#schedule-table-body').append(row)
        })
    }
}
)