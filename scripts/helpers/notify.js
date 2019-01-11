let notify = (() => {
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.fadeIn();
        setTimeout(() => {
            infoBox.fadeOut()
        }, 3000);
    };

    function showError(message) {
        let errBox = $('#errorBox');
        errBox.find('span').text(message);
        errBox.fadeIn();
        setTimeout(()=>{
            errBox.fadeOut();
        },3000)
    };

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    return{
        showInfo,
        showError,
        handleError
    }
})();