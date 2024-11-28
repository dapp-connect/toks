var active_rate_table = 1;
var table_1 = $("#table-wrap-1").find("table.regions_rates_table");
var tbody_1 = table_1.find("tbody.rates-table-tbody");
var rows_1 = tbody_1.find("tr");
var init_row_1 = tbody_1.find("tr:nth-child(2)");
var init_rate_1 = init_row_1.find("td:nth-child(3)").html();

var table_2 = $("#table-wrap-2").find("table.regions_rates_table");
var tbody_2 = table_2.find("tbody.rates-table-tbody");
var rows_2 = tbody_2.find("tr");
var init_row_2 = table_2.find("tr:nth-child(2)");
var init_rate_2 = init_row_2.find("td:nth-child(3)").html();

var table_3 = $("#table-wrap-1").find("table.regions_rates_table");
var tbody_3 = table_3.find("tbody.rates-table-tbody");
var rows_3 = tbody_3.find("tr");
var init_row_3 = table_3.find("tr:nth-child(2)");
var init_rate_3 = init_row_3.find("td:nth-child(3)").html();
