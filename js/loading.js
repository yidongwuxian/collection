
function showLoading(){
    $(document.body).append('<div class="mui-mask_transparent"></div>\
        <div class="mui-toast">\
            <i class="loading"></i>\
            <p class="mui-toast__content">加载中...</p>\
    </div>');
}

function hideLoading(){
    $('.backdrop').remove();
}
