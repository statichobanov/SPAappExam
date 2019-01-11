const like = (function () {

    const postLike = function (ctx) {

        likeModel.like(ctx.params).then((res) => {
            notify.showInfo(`You liked ${res.name}`);
            ctx.redirect('#/');
        }).catch(notify.handleError);
    };

    return {
        postLike
    }
})();