$(function () {
    showSP(CaNhan, "#content");
    // $("#timkiem").keyup(function(){
    //     var value = $(this).val().toLowerCase();
    //     $("#content .sp").filter(function(){
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    //     });
    // })
})

function showSP(data, id) {
    let s = "";
    $.each(data, function (k, v) {
        s += `
            <div class="sp col-md-3">
                <h4 class="text-center">${v.name}</h4>
                <img src="${v.avatar}" > <!--280 170-->
                <div class="text-center">
                    <button class="btn btn-default chitiet" data-id="${v.id}">Chi tiết</button>
                </div>
            </div>
        `
    })
    $(id).html(s);

    $(id + " .sp .chitiet").click(function () {
        let id = $(this).data("id");
        localStorage.setItem("masp", id);
        switch (id) {
            case 1:
                window.location = "./UuDai.html";
                break;
            case 2:
                window.location = "#";
                break;
            case 3:
                window.location = "./TaiKhoan.html";
                break;
            case 4:
                window.location = "./The.html";
                break;
            case 5:
                window.location = "./TietKiem.html";
                break;
            case 6:
                window.location = "./ChoVay.html";
                break;
            case 7:
                window.location = "./ChuyenNhanTien.html";
                break;
            case 8:
                window.location = "./NganHangSo.html";
                break;
            case 9:
                window.location = "./BaoHiem.html";
                break;
            case 10:
                window.location = "./DauTu.html";
                break;
            case 11:
                window.location = "#";
                break;
            case 12:
                window.location = "./VCBFamily.html";
                break;
            case 13:
                window.location = "./GiaoDichAnToan.html";
                break;
            default:
                break;
        }
        // if (id == 1) {
        //     window.location = "./UuDai.html";
        // }
    })
}