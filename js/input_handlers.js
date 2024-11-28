$(document).ready(function() {


    //Deal with slider input
    $('#rate-slide').on("input change", function update_slider() {

        $('#loan-amount').val($(this).val());

        if ($("#box1").is(':visible')) {
            var value = $(this).val();
            
            var term = get_autoloan_term()

            
            var rate = get_apr_float();
            var rate_string = get_apr_string();
            
            
            $("span#sub-term").html(term);
            $("span#term_string").html(term + " Months");
            $("#loan-rate").html($("tr.activated td:first").html());
            $("span#term_string").html(term + " Months");
            //$("span#loan-interest").html(rate * 100);   
            $("span#loan-interest").html(rate_string.replace("%", ""));
    
            var pmt = calculate_payment(value, rate, term);
            pmt = Math.round10(pmt, -2);
    
            var fm = calc_fm(value);
            $('#loan-amount').val(fm);
            var fm_pmt = calc_pmt(pmt);
            $('#rate-slider-output-amount').html(fm_pmt);
        }
        if ($("#box2").is(':visible')) {
            term = get_IRA_term_string();
            term = parseInt(term.substring(0,2));
            var value = $(this).val();
            var rate = get_apr_float();
            $("span#sub-term").html(term + " Months");
            $("span#term_string").html(term + " Months");
            $("#loan-rate").html(term + " Months");
            $("span#term_string").html(term + " Months");
            $("span#loan-interest").html(rate * 100);    
            var pmt = calculate_apy(value, rate, term);
            pmt = Math.round10(pmt, -2);
    
            var fm = calc_fm(value);
            $('#loan-amount').val(fm);
            var fm_pmt = calc_pmt(pmt);
            $('#rate-slider-output-amount').html(fm_pmt);
        }
        if ($("#box3").is(':visible')) {
            if($("tr.activated td:nth-child(2)").html().substring(0,1) == "2") {
                var term = 24;
                //$("span#sub-term").html(term);
                $("span#term_string").html(term);
                $("#loan-rate").html(term + " Months");
            } else {   
                var term = 12;
                //$("span#sub-term").html("per month");
                $("span#term_string").html("per month");
                $("#loan-rate").html("per month");
            }
            var value = $(this).val();

            var term = 12;
            var rate = get_apr_float();

    
            $("span#term_string").html("per month");
    
            $("span#loan-interest").html(rate * 100);
            $("span#loan-rate").html($("div#table-wrap-3 tr.activated>td.arrow").html());
    
            var pmt = calculate_apy(value, rate, term);
            //pmt = pmt * 12;
            pmt = Math.round10(pmt, -2);
    
            var fm = calc_fm(value);
            $('#loan-amount').val(fm);
            var fm_pmt = calc_pmt(pmt);
            $('#rate-slider-output-amount').html(fm_pmt);
        }

        

    });

    
})