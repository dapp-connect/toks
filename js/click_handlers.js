$(document).ready(function() {
    /* Handle dropdown rate box 1 - Mortgages*/
    $("#switch1").click(function() {
        $(".rate-drop-switch").each(function() {$(this).removeClass("active")})
        $(this).addClass("active");
        if (active_rate_table == 2) {
            rows_2.removeClass("activated");
        } else if (active_rate_table == 3) {
            rows_3.removeClass("activated");
        } 
        active_rate_table = 1;

        $("#box3").slideUp(100);
        $("#box2").slideUp(100);
        $("#box1").slideToggle(100);

        make_active_row($("#table-wrap-1 table tbody tr.rates-table-row:nth-child(2)"));
        var term = get_autoloan_term();
        var rate_string = get_apr_string();
        var rate = get_apr_float();
        var pmt = calculate_payment($("#rate-slide").val(), rate, term);
        pmt = Math.round10(pmt, -2);
        var fm_pmt = calc_pmt(pmt);

        //Set the initial interface values
        $("#loan-interest").html(rate_string)
        $("#caption-header").html("What's Your Loan Amount?");
        $("#rate-slide").attr("min", "1000");
        $("#rate-slide").attr("max", "100000");
        $("#loan-amount").attr("maxlength", 12);
        $("#rate-slide").val("10000.00");
        $("#loan-amount").val("10,000.00");
        $("#rate-slide").attr("step", "100");
        $("#term_string").html("2");
        $("#disclaimer").html("");
        $("#interest-title").html(" APR");
        $("#rate-slide-instruction").html("Slide to adjust loan amount");
        $("#loan-type-title").html("");
        $("#loan-type-label").html("Mortgage");
        $("#rate-title").html("Name: ");
        $("#loan-rate").html($("tr.activated td:first").html());
        $("#rate-slider-cta").html("Apply Now");
        $("#rate-slider-cta").css("display", "block");
        $("#sub-term").html("for " + term + " months");
        $("#time-unit-2").html(" ");
        $("#payment-message").html("Your monthly payment is only...");
        $("#adverb").html("");
        $("#wantToSaveMore").show()
        $("#rate-slider-output-amount").html(fm_pmt);

    });
    /* Handle dropdown rate box 2 - Auto Loans */
    $("#switch2").click(function() {
        $(".rate-drop-switch").each(function() {$(this).removeClass("active")})
        $(this).addClass("active");
        if (active_rate_table == 1) {
            rows_1.removeClass("activated");
        } else if (active_rate_table == 3) {
            rows_3.removeClass("activated");
        } 
        active_rate_table = 2;

        $("#box3").slideUp(100);

        $("#box1").slideUp(100);

        $("#box2").slideToggle(100);

        //Set the initial interface values
        $("#wantToSaveMore").hide()
        $("#caption-header").html("What's Your Certificate Amount?");
        $("#rate-slide").attr("min", "1000");
        $("#rate-slide").attr("max", "100000");
        $("#loan-amount").attr("maxlength", 12);
        $("#rate-slide").val("10000.00");
        $("#loan-amount").val("10,000.00");
        $("#rate-slide").attr("step", "100");
        $("#term_string").html("2");
        $("#disclaimer").html("");
        $("#interest-title").html("% APY");
        $("#rate-slide-instruction").html("Slide to adjust loan amount");
        $("#loan-type-title").html("");
        $("#loan-type-label").html("Mortgage");
        $("#rate-title").html("Term: ");
        $("#rate-slider-cta").html("Apply Now");
        $("#rate-slider-cta").css("display", "block");
        $("#time-unit-2").html("");
        $("#payment-message").html("Your Certificate Earns");
        $("#adverb").html("after ")
        
        make_active_row($("#table-wrap-2 table tbody tr.rates-table-row:nth-child(2)"));
        $("#sub-term").html($("div#table-wrap-2  tr.activated > td.regions_rates_table_row:nth-child(2)").html());

        var rate = get_apr_float();

        var pmt = calculate_apy($("#rate-slide").val(), rate, 1);
        pmt = Math.round10(pmt, -2);
        var fm_pmt = calc_pmt(pmt);

        var term = get_IRA_term_string();
        $("#loan-interest").html(rate*100)
        $("#loan-rate").html(term);
        $("#rate-slider-output-amount").html(fm_pmt);

    });
    /* Handle dropdown rate box 3 - Certificates */
    $("#switch3").click(function() {
        $(".rate-drop-switch").each(function() {$(this).removeClass("active")})
        $(this).addClass("active");
        if (active_rate_table == 1) {
            rows_1.removeClass("activated");
        } else if (active_rate_table == 2) {
            rows_2.removeClass("activated");
        } else if (active_rate_table == 4) {
            rows_4.removeClass("activated");
        }
        active_rate_table = 3;

        $("#box2").slideUp(100);

        $("#box1").slideUp(100);

        $("#box3").slideToggle(100);


        //Set the initial interface values
        $("#wantToSaveMore").hide()
        $("#caption-header").html("What's Your Savings Amount?");
        $("#rate-slide").attr("min", "1000");
        $("#rate-slide").attr("max", "100000");
        $("#loan-amount").attr("maxlength", 12);
        $("#rate-slide").val("10000.00");
        $("#loan-amount").val("10,000.00");
        $("#rate-slide").attr("step", "100");
        $("#term_string").html("2");
        $("#disclaimer").html("");
        $("#interest-title").html("% APY");
        $("#rate-slide-instruction").html("Slide to adjust loan amount");
        $("#loan-type-title").html("");
        $("#loan-type-label").html("Mortgage");
        $("#rate-title").html("Name: ");
        $("#rate-slider-cta").html("Apply Now");
        $("#rate-slider-cta").css("display", "block");
        $("#sub-term").html("yearly");


        $("#time-unit-2").html("");
        $("#payment-message").html("Your yearly dividend earned is...");
        $("#adverb").html("");
        
        make_active_row($("#table-wrap-3 table tbody tr.rates-table-row:nth-child(2)"));

        var rate = get_apr_float();

        var pmt = calculate_apy($("#rate-slide").val(), rate, 12);
        //pmt = pmt * 12;
        pmt = Math.round10(pmt, -2);
        
        var fm_pmt = calc_pmt(pmt);

        $("#loan-interest").html(rate*100)
        $("#loan-rate").html($("div#table-wrap-3 tr.active-rate-row>td.arrow").html());
        $("#rate-slider-output-amount").html(fm_pmt);
    });
})
