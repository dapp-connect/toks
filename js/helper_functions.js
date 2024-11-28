// Closure for decimal rounding
(function() {
    /**
     * Decimal adjustment of a number.
     *
     * @param {String}  type  The type of adjustment.
     * @param {Number}  value The number.
     * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
     * @returns {Number} The adjusted value.
     */
    function decimalAdjust(type, value, exp) {
        // If the exp is undefined or zero...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // If the value is not a number or the exp is not an integer...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Shift
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
})();


//Calculate monthly payment
function calculate_payment(principal, rate, term) {
    var p = principal;
    var r = rate;
    var t = term;

    var mo_r = r / 12;
    var months = t;

    var a = 1 + mo_r;

    var power = Math.pow(a, months);

    var b = (mo_r * power) / (power - 1);

    var payment = p * b;

    return payment;
}

//Calculate Personal Loan payment
function calculate_personal_loan_payment(principal, rate, term) {
    var p = principal;
    var r = rate;
    var t = term;

    var mo_r = r / 12;

    var a = 1 + mo_r;

    var power = Math.pow(a, term);

    var b = (mo_r * power) / (power - 1);

    var payment = p * b;

    return payment;
}

//Calculate monthly payment
function calculate_auto_payment(principal, rate, term) {
    var p = principal;
    var r = rate;
    var t = term;

    var mo_r = r / 12;
    var months = term;

    var a = 1 + mo_r;

    var power = Math.pow(a, months);

    var b = (mo_r * power) / (power - 1);

    var payment = p * b;

    return payment;
}

//Calculate accrued interest on CD
function calculate_apy(dep, rate, term) {
    var d = dep;
    var r = rate;
    var t = term / 12;
    var n = 1;

    var exp = n * t;

    var par = 1 + (r / n);

    var mult = Math.pow(par, exp);

    var f = d * mult;

    f -= d;

    return f;
}

//Set table row to active when clicked
function make_active_row(row) {
    $("tr.activated").removeClass("activated");
    $(row).addClass("activated");
}

//Returns the term based on the first two characters of the Name field
function get_term() {
    var term_td = $("tr.activated").find("td:first").html();
    //var term_html = String(term_td.html()).substring(0, 2);
    //if (term_html.substring(1, 2) == " ") {
    //    var years_int = parseInt(term_html.substring(0, 1));
    //    term_html = String(years_int);
    //}
    return term_td;
}

//Returns the term for Auto Loans based on last two digits of Term column (2)
function get_autoloan_term() {
    var term_td = $("tr.activated").find("td:nth-child(2)");
    var term_html = String(term_td.html());
    console.log(term_td);

    term_td_length = String(term_td.html()).length;
    
    if(term_html.includes("Months")) {
        console.log("months")
        var term_html = String(term_td.html()).substring(0,(term_td_length -7));
        
    } else if(term_html.includes("meses")) {
        console.log("meses");
        var term_html = String(term_td.html()).substring(0,(term_td_length -6));
    }

    term_html = term_html.trim();

    //var term_td_length = String(term_td.html()).length;
    //var term_html = String(term_td.html()).substring(0,(term_td_length -7));
    //term_html = term_html.trim();

    //console.log("Auto loan term " + term_html);


    return term_html;
}

//Returns the term for Auto Loans based on last two digits of Term column (2)
function get_autoloan_term_string() {
    var term_td = $("tr.activated").find("td:nth-child(2)").html();
    return term_td;
}

//Returns the term for Auto Loans based on last two digits of Term column (2)
function get_IRA_term_string() {
    var term_td = $("tr.activated").find("td:nth-child(2)").html();
    return term_td;
}

//Returns the type of loan type for Auto Loans
function get_autoloan_type() {
    var term_td = $("tr.activated").find("td:nth-child(1)").html();
    return term_td;
}

//Returns a string with the data from the rate field, not used for calculation
function get_rate_string() {
    var pre_rate = $("tr.activated").find("td:nth-child(2)");
    pre_rate = pre_rate.html();
    pre_rate_string = String(pre_rate);
    pre_rate_length = pre_rate.length;
    pre_rate_number = pre_rate_string.substring(0, (pre_rate_length - 1));
    return pre_rate_number;
}

function get_personal_loan_amount() {
    var pre_rate = $("tr.activated").find("td:nth-child(2)");
    pre_rate = pre_rate.html();
    return pre_rate;
}

function get_rate_float() {
    var pre_rate = $("tr.activated").find("td:nth-child(2)");
    pre_rate = pre_rate.html();
    pre_rate_float = parseFloat(pre_rate);
    pre_rate_float = pre_rate_float / 100;
    return pre_rate_float;
}

//Returns a string with the data from the APR field, not used for calcuation
function get_apr_string() {
    var new_rate = $("tr.activated").find("td:last")
    new_rate = new_rate.html();
    return new_rate;
}

//Returns a float with the APR value, used for calculation
function get_apr_float() {
    var new_rate = $("tr.activated").find("td:last")
    new_rate = new_rate.html();
    new_rate_float = parseFloat(new_rate);

    new_rate_float = new_rate_float / 100;
    return new_rate_float;
}

//Formulates loan amount with comma and cents.
function calc_fm(val) {
    if (val % 1000 != 0) {
        var remainder = val % 1000;
        remainder = Math.round10(remainder, -2);

        if (remainder < 100 || (remainder % 1) != 0) {
            var dec = remainder % 1;
            dec = Math.round10(dec, -2);
            var dec_mod = dec % 0.1;
            dec_mod = Math.round10(dec_mod, -2);
            if (remainder < 100 && dec_mod == 0) {
                if (remainder < 10) {
                    remainder = "00" + remainder;
                    if (dec == 0) {
                        remainder = remainder + ".00"
                    } else {
                        remainder = remainder + "0";
                    }
                } else {
                    remainder = "0" + remainder;
                    if (dec == 0) {
                        remainder = remainder + ".00"
                    } else if (dec == 0.1 || dec == 0.2 || dec == 0.3 || dec == 0.4 || dec == 0.5 || dec == 0.6 || dec == 0.7 || dec == 0.8 || dec == 0.9) {
                        remainder = remainder + "0";
                    }

                }
            } else if (remainder < 100 && dec_mod == 0.1 || dec == 0.2 || dec == 0.3 || dec == 0.4 || dec == 0.5 || dec == 0.6 || dec == 0.7 || dec == 0.8 || dec == 0.9) {
                if (remainder < 10) {
                    remainder = "00" + remainder;
                    if (dec == 0) {
                        remainder = remainder + ".00"
                    } else {
                        remainder = remainder + "0";
                    }
                } else {

                    if (dec == 0) {
                        remainder = remainder + ".00"
                    } else if (dec == 0.1 || dec == 0.2 || dec == 0.3 || dec == 0.4 || dec == 0.5 || dec == 0.6 || dec == 0.7 || dec == 0.8 || dec == 0.9) {
                        remainder = remainder + "0";
                    }

                }
            } else {
                if (remainder < 100) {
                    if (remainder < 10) {
                        remainder = "00" + remainder;
                    } else {
                        remainder = "0" + remainder;
                    }

                }
                if ((dec % 0.1) == 0) {
                    remainder = remainder + "0";
                }
            }
        } else if (remainder % 1 == 0) {
            remainder = remainder + ".00";
        }

        var thousands = val - remainder;
        var first = thousands / 1000;
        if (first == 0) {
            var fm = remainder;
        } else {
            var fm = first + "," + remainder;
        }

    } else if ((val % 1000) == 0) {
        if (val % 100000 == 0 && val < 1000000) {
            var div = val / 100000;
            var fm = div + "00,000.00";
        } else if (val % 10000 == 0 && val < 1000000) {
            var div = val / 10000;
            var fm = div + "0,000.00";
        } else if (val < 1000000) {
            var div = val / 1000;
            var fm = div + ",000.00"
        } else {
            var fm = "1,000,000.00"
        }

    }
    return fm;
}

//Formulates payment amount with comma and cents.
function calc_pmt(pmt) {
    if (pmt > 999.99) {
        pmt_rem = pmt % 1000;
        pmt_rem = Math.round10(pmt_rem, -2);
        pmt_rem_back = Math.round10(pmt_rem, -2);
        pmt_dec = pmt_rem % 1;
        pmt_dec = Math.round10(pmt_dec, -2);
        pmt_decmod = pmt_dec % 0.1;
        pmt_decmod = Math.round10(pmt_decmod, -2);
        if (pmt_dec == 0) {
            pmt_rem = Math.round10(pmt_rem, 0);
            pmt_rem = pmt_rem + ".00";
        } else if (pmt_decmod == 0.1 || pmt_decmod == 0) {
            pmt_rem = Math.round10(pmt_rem, -1);
            pmt_rem = pmt_rem + "0";
        }

        if (pmt_rem_back < 100 && pmt_decmod != 0.1) {
            if (pmt_rem_back < 10) {
                pmt_rem = "00" + pmt_rem;
            } else {
                pmt_rem = "0" + pmt_rem;
            }
        } else if (pmt_decmod == 0.1 && pmt_rem_back < 100) {
            if (pmt_rem_back < 10) {
                pmt_rem = "00" + pmt_rem;
            } else {
                pmt_rem = "0" + pmt_rem;
            }
        }

        pmt_thou = pmt - pmt_rem;
        pmt_thou = pmt_thou / 1000;
        pmt_thou = Math.round10(pmt_thou, 0);

        pmt = pmt_thou + "," + pmt_rem;
    } //Put payment value in comma separated and proper decimal value.
    else {
        pmt_back = pmt;
        pmt_dec = pmt % 1;
        pmt_dec = Math.round10(pmt_dec, -2);
        pmt_decmod = pmt_dec % 0.1;
        pmt_decmod = Math.round10(pmt_decmod, -2);
        if (pmt_dec == 0) {
            pmt = Math.round10(pmt, 0);
            pmt = pmt + ".00";
        } else if (pmt_decmod == 0.1 || pmt_decmod == 0) {
            pmt = Math.round10(pmt, -1);
            pmt = pmt + "0";
        }

        if (pmt_back < 100 && pmt_decmod != 0.1) {
            if (pmt_back < 10) {
                pmt = pmt;
            } else {
                pmt = pmt;
            }
        } else if (pmt_decmod == 0.1 && pmt_back < 100) {
            if (pmt_back < 10) {
                pmt = pmt;
            } else {
                pmt = pmt;
            }
        }

    }
    return pmt;
}