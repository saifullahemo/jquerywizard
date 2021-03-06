var email;
var username;
var firstname;



var tc, ds, uname, lname, phno, phno_2, pwd, cpwd;

var current = 1;
var current_fs, next_fs, previous_fs; //fieldsets
var steps;

$(document).ready(function () {

    var opacity;

    var steps = $("fieldset").length;

    setProgressBar(current, steps);

    handleNextBtn(steps);
    handlePreviousBtn(steps);
    handleSubmitBtn();



});


/**
 * Set the progress bar
 */
function setProgressBar(curStep, steps) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
        .css("width", percent + "%")
}



/**
 * Event fired when clicking on the Next Button
 */
function handleNextBtn(steps) {
    // return false;
    // console.log("hello world");

    $(".next").click(function () {

        $("form").validate({

            errorClass: "error fail-alert",
            validClass: "valid success-alert",

            rules: {
                pwd: {
                    minlength: 5
                },
                cpwd: {
                    minlength: 5,
                    equalTo: "#pwd"
                }
            },
            messages:{
                email:'Please enter valid mail address',
                pwd: 'Please enter min 6 characters',
                //cpwd:'Use same characters'
            },

            errorPlacement: function(error, element) {
                element.prev('label').replaceWith(error);
          }

            
        });

        if ((!$("form").valid())) {
            return false;

        }



        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current, steps);
        console.log(current);

        if (current == 2) {
            email = $('#email').val();
            username = $('#username').val();

        }
        if (current == 3) {

            firstname = $('#fname').val();
            lname = $('#lname').val();
            phno = $('#phno').val();
            phno_2 = $('#phno_2').val();
        }

        if (current == 4) {
            // console.log("I am INside this logic")
            // console.log(email)
            //  console.log(firstname)

            $('#emailVal').text(email);
            $('#userVal').text(username);
            $('#fVal').text(firstname);
            $('#lVal').text(lname);
            $('#phnVal').text(phno_2);
            $('#pVal').text(phno);

        }


    });
}

/**
 * Event fired when clicking on the Previous Button
 */
function handlePreviousBtn(steps) {

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current, steps);
        console.log(current);
    });
}

/**
* On Clicking the submit button
*/
function handleSubmitBtn() {
    $(".submit").click(function () {
        //     $("#msform").submit();
        // return false;

        // document.getElementById("data").innerHTML = localStorage.getItem("txtValue");
        // document.getElementById("data1").innerHTML = localStorage.getItem("txtValue1");


        return false;
    })
}