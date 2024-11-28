$(document).ready(function() {

    $("#box1").delay(500).slideToggle(300);
    $("#arrow1").addClass("flipped");

    var start = $("#table-wrap-1").find("table.regions_rates_table");

    $("table.regions_rates_table").find("tbody").addClass("rates-table-tbody");
    $("tbody.rates-table-tbody").find("tr").addClass("rates-table-row");

    var children = $("tr.rates-table-row").find("td.regions_rates_table_row1");
    if (children.length != 0) {
        children.parent().addClass("active-rate-row");
    }
    var children2 = $("tr.rates-table-row").find("td.regions_rates_table_row2");
    if (children2.length != 0) {
        children2.parent().addClass("active-rate-row");
    }
    var start_table = start.find("tbody.rates-table-tbody");
    var initial = $(start_table).find("tr:nth-child(2)");
    make_active_row(initial);

    var term_string = get_autoloan_term_string();
    var term = get_autoloan_term();


    

    $("#sub-term").html(term);
    //$("#time-unit-2").html(" months")

    var starting_apr = initial.find("td:nth-child(3)").html().replace("%", "");
    $("#loan-interest").html(starting_apr);


    $("tr.active-rate-row").click(function() {
        make_active_row(this);
    
 
        var term = get_autoloan_term();
        

        if ($("#box1").is(':visible')) {
            $("#adverb").html(" ")
            $("span#sub-term").html("for " + term)
            //$("#time-unit-2").html(" months");
            $("span#term_string").html("per month");
            $("#loan-rate").html($("tr.activated td:first").html());
            $("span#number-of-months-header").html(term)

            var rate = get_apr_float();
            var pmt = calculate_payment($("#rate-slide").val(), rate, term);
            pmt = Math.round10(pmt, -2);
            $("#loan-interest").html((rate * 100).toFixed(2));
            pmt = calc_pmt(pmt);
            //console.log(pmt);
            $('#rate-slider-output-amount').html(pmt);

        } 
        if ($("#box2").is(':visible')) {
            $("#adverb").html(" after ")
            term = get_IRA_term_string();
            term = parseInt(term.substring(0,2));
            $("span#sub-term").html(term + " months");
            $("span#term_string").html(term + " months");
            $("#loan-rate").html($("tr.activated td:nth-child(2)").html());

            var rate = get_apr_float();
            var pmt = calculate_apy($("#rate-slide").val(), rate, term);
            //console.log(rate)
            //console.log(pmt)
            pmt = Math.round10(pmt, -2);
            $("#loan-interest").html(rate*100);
            pmt = calc_pmt(pmt);
            console.log(pmt);
            $('#rate-slider-output-amount').html(pmt);
        }
        if ($("#box3").is(':visible')) {
            term = 12;
            $("#adverb").html(" ")
            //$("span#sub-term").html(term);
            $("span#term_string").html("yearly");
            $("#loan-rate").html($("tr.activated td:first").html());
            var rate = get_apr_float();
            var pmt = calculate_apy($("#rate-slide").val(), rate, term);
            console.log($("#rate-slide").val())
            console.log(term)
            console.log(rate)
            console.log(pmt)
            //pmt = pmt * 12;
            pmt = Math.round10(pmt, -2);
            $("#loan-interest").html(rate*100);
            pmt = calc_pmt(pmt);
            console.log(pmt);
            $('#rate-slider-output-amount').html(pmt);
        }


        //$("span#loan-interest").html(rate_string);
        //$("span#loan-rate").html(pre_rate);


    });

    var value = $("#rate-slide").val();

    var rate = get_apr_float();
    var rate_string = get_apr_string();
    var pre_rate = get_rate_string();
    if (pre_rate == "&nbsp") {
        pre_rate = rate_string;
    }

    //console.log(value, term, term_string, rate);


    var pmt = calculate_payment(value, rate, term);
    //console.log(pmt);

    pmt = Math.round10(pmt, -2);
    var fm = calc_fm(value);

    $('#loan-amount').val(fm);

    var fm_pmt = calc_pmt(pmt);
    $('#rate-slider-output-amount').html(fm_pmt);

    

    setTimeout(function() {

        if($("html").attr("lang") == "es") {
            console.log("spanish");
    
            $("#rate-term").html("Meses:")
            $("#time-unit-2").html(" meses")
    
        } else {
            console.log($("html").attr("lang"))
        }

        $("#loan-rate").html($("tr.activated td:first").html());
        
    }, 3000)
});