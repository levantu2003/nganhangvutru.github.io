click = -1;

function appear_tab(number)
{
    tab = document.getElementsByClassName("tab");
    item = document.getElementsByClassName("item");
    if (click == number)
    {
        tab[number].style.display = "none";
        item[number].style.backgroundColor = "#FFFFFF";
        item[number].getElementsByClassName("item_title")[0].style.color = "#54B435";
        item[number].getElementsByClassName("item_box")[0].style.opacity = 0;
        click = -1;
        item[number].onmouseover("hover_item(number");
        return;
    }
    for (i = 0; i < item.length; i = i + 1)
    {
        if (i == number)
        {
            tab[i].style.display = "block";
            item[i].style.backgroundColor = "#B6EADA";
            item[i].getElementsByClassName("item_title")[0].style.color = "#0A4D68";
            item[i].getElementsByClassName("item_box")[0].style.opacity = 1;
            click = i;
        }
        else
        {
            tab[i].style.display = "none";
            item[i].style.backgroundColor = "#FFFFFF";
            item[i].getElementsByClassName("item_title")[0].style.color = "#54B435";
            item[i].getElementsByClassName("item_box")[0].style.opacity = 0;
        }
    }
    if (number >= 0 && number <= 2 ) document.getElementById("find_two").scrollIntoView();
    else if (number >= 3 && number <= 5) document.getElementById("find_three").scrollIntoView();
    else document.getElementById("find_four").scrollIntoView();
}
function hover_item(number)
{
    item = document.getElementsByClassName("item");
    for (i = 0; i < item.length; i = i + 1)
    {
        if (i == number)
        {
            item[i].style.cursor = "pointer";
            item[i].getElementsByClassName("item_title")[0].style.color = "#0A4D68";
            item[i].getElementsByClassName("item_box")[0].style.opacity = 1;
        }
    }
}
function stop_item(number)
{
    item = document.getElementsByClassName("item");
    for (i = 0; i < item.length; i = i + 1)
    {
        if (i != click)
        {
            item[i].getElementsByClassName("item_title")[0].style.color = "#54B435";
            item[i].getElementsByClassName("item_box")[0].style.opacity = 0;
        }
    }
}
function change_card_info()
{
    select = document.getElementById("card_select").value;

    if (select.localeCompare("Credit") == 0)
    {
        document.getElementById("card_info").innerHTML = "Cho phép vay tiền từ ngân hàng để thanh toán dịch vụ." + "<br>" + "Những khoản nợ sẽ được thanh toán vào cuối tháng."
    }
    else if (select.localeCompare("Debit") == 0)
    {
        document.getElementById("card_info").innerHTML = "Cho phép chủ thẻ chi tiêu trực tiếp từ tài khoản ngân hàng của họ." + "<br>" + "Số tiền sẽ được trừ trực tiếp từ số dư trong tài khoản ngân hàng của chủ thẻ."
    }
    else
    {
        document.getElementById("card_info").innerHTML = "Cho phép chi tiêu hơn 1000 USD mỗi tháng và là thẻ VIP cho những sự kiện, nhà hàng, khách sạn đối tác của ngân hàng."
    }
}
function create_card()
{
    document.getElementById("card_type").innerHTML = document.getElementById("card_select").value + " Card";
    document.getElementById("card_information").innerHTML = document.getElementById("card_info").innerHTML;
    document.getElementById("card_cardholder").innerHTML = document.getElementById("card_one").value;
    document.getElementById("card_number").innerHTML = document.getElementById("card_two").value;
    date = new Date(document.getElementById("card_three").value);
    document.getElementById("card_date").innerHTML = "From: " + (date.getMonth() + 1) + "/" + (date.getFullYear().toString().substr(-2)) + "<br>" + "To: " + (date.getMonth() + 1) + "/" + ((date.getFullYear() + 5).toString().substr(-2));
    document.getElementById("card_password").innerHTML = document.getElementById("card_five").value;
    color = document.getElementById("card_four").value;
    if (check_color(color))
    {
        document.getElementById("card_front").style.backgroundColor = color;
        document.getElementById("card_back").style.backgroundColor = color;
        document.getElementById("card_top").style.backgroundColor = "#FFFFFF";
        document.getElementById("card_bottom").style.backgroundColor = "#FFFFFF";
        document.getElementById("card_type").style.color = "#FFFFFF";
        document.getElementById("card_information").style.color = "#FFFFFF";
        document.getElementById("card_cardholder").style.color = "#FFFFFF";
        document.getElementById("card_number").style.color = "#FFFFFF";
        document.getElementById("card_date").style.color = "#FFFFFF";
        document.getElementById("card_password").style.color = "#FFFFFF";
        document.getElementById("card_logo").style.color = "#FFFFFF";
        document.getElementById("card_chip").getElementsByTagName("img")[0].src = "/img/icon/chip_white.png";
        document.getElementById("card_chip").getElementsByTagName("img")[0].alt = "chip_white";
    }
    else
    {
        document.getElementById("card_front").style.backgroundColor = color;
        document.getElementById("card_back").style.backgroundColor = color;
        document.getElementById("card_top").style.backgroundColor = "#000000";
        document.getElementById("card_bottom").style.backgroundColor = "#000000";
        document.getElementById("card_type").style.color = "#000000";
        document.getElementById("card_information").style.color = "#000000";
        document.getElementById("card_cardholder").style.color = "#000000";
        document.getElementById("card_number").style.color = "#000000";
        document.getElementById("card_date").style.color = "#000000";
        document.getElementById("card_password").style.color = "#000000";
        document.getElementById("card_logo").style.color = "#000000";
        document.getElementById("card_chip").getElementsByTagName("img")[0].src = "/img/icon/chip_black.png";
        document.getElementById("card_chip").getElementsByTagName("img")[0].alt = "chip_black";
    }
}
function check_color(color) //I steal this online. Do not ask!!!
{
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    red = color >> 16;
    green = color >> 8 & 255;
    blue = color & 255;
    brightness = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));
    return brightness < 200;
}
function submit_form()
{
    document.getElementById("acc_fin").style.display = "flex";
    return false;
}
function reset_form()
{
    document.getElementById("acc_fin").style.display = "none";
}
function calculate_exchange(number)
{
    input = document.getElementById("exc").getElementsByTagName("input");
    exchange = input[number].value;

    for (i = 0; i < input.length; i = i + 1)
    {
        if (i != number)
        {
            input[i].value = Number(Number(exchange * exchange_rate(number, i)).toFixed(4)).toLocaleString("en-US");
        }
    }
}
function exchange_rate(exchanger, exchangee)
{
    dollar = [1.0, 0.88, 23200, 1.27, 1134, 109, 8.64];
    euro = [1.14, 1.0, 27182.17, 0.88, 1313.03, 126.24, 10.02];
    dong = [0.000043, 0.000036, 1.0, 0.000032, 0.052, 0.005, 0.00041];
    pound = [1.25, 1.14, 31745.45, 1.0, 1537.91, 148.26, 11.76];
    won = [0.00088, 0.00079, 77.18, 0.00065, 1.0, 0.096, 0.0076];
    yen = [0.0092, 0.0082, 200.44, 0.0068, 10.37, 1.0, 0.079];
    lira = [0.12, 0.11, 2858.06, 0.096, 146.33, 12.61, 1.0];

    if (exchanger == 0) return dollar[exchangee];
    if (exchanger == 1) return euro[exchangee];
    if (exchanger == 2) return dong[exchangee];
    if (exchanger == 3) return pound[exchangee];
    if (exchanger == 4) return won[exchangee];
    if (exchanger == 5) return yen[exchangee];
    if (exchanger == 6) return lira[exchangee];
}