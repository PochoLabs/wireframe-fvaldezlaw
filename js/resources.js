jQuery(document).ready(function() {

    jQuery('#nl-form').on('submit', function(event) {
        event.preventDefault();

        // Get data
        var formData = jQuery(this).serializeArray();

        var fWho = formData[0].value;
        var fNeed = formData[1].value;
        var fContactMethod = formData[2].value;
        var fContactInfo = formData[3].value;

        console.log('Who: ' + fWho);
        console.log('Need: ' + fNeed);
        console.log('Contact Method: ' + fContactMethod);
        console.log('Contact Info: ' + fContactInfo);

        // Validate the contact data

        var validData = validateForm(formData);

        // IF submit success ==> Show results

        if (validData) {
            // Send the data somewhere!
            // jQuery.ajax({
            //     url: "/wp-admin/admin-ajax.php",
            //     type: 'POST',
            //     data: 'who=' + fWho + 'need=' + fNeed + 'method=' + fContactMethod + 'fContactInfo',
            //     success: function(results) {
            //         console.log(results);
            //
            //     }
            // });


            // Redirect
            var theurl = 'http://fvaldez.digitalstrategy.tips/?s=' + fNeed;
            window.location.href = theurl;

        } else {
            alert("We didn't understand what your input in the last field. Please try again.");

            jQuery('.nl-ti-example').html('We didn\'t understand. Can you try again?');

        }




    });

    function validateForm(data) {
        var method = data[2].value;
        var userInput = data[3].value;
        var isValid;

        switch (method) {
            case 'call':
                var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
                isValid = re.test(userInput);
                break;
            case 'email':
                var re2 = /\S+@\S+\.\S{2,5}/;
                isValid = re2.test(userInput);
                break;
            default:
                isValid = undefined;
                break;

        }
        return isValid;
    }


});
