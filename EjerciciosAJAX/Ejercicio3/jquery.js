$(document).ready(function() {
    $('#loadData').click(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            success: function(data) {
                let resultHtml = '<ul>';
                data.forEach(post => {
                    resultHtml += `<li>${post.title}</li>`;
                });
                resultHtml += '</ul>';
                $('#result').html(resultHtml);
            },
            error: function() {
                $('#result').html('Error al cargar los datos.');
            }
        });
    });
});