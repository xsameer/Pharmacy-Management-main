$(document).ready(function(){
    $('#pharmacyForm').submit(function(e){
        e.preventDefault(); 
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'process_form.php', 
            data: formData,
            success: function(response){
                $('#result').html(response); 
                window.location.href="display.php";  
            }
        });
    });
});
