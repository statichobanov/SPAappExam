const user = (function () {
    const getLogin = function (ctx) {

        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/forms/login.hbs');

        })
    }

    const postLogin = function (ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;

        userModel.login(username, password)
            .then(function (data) {

                storage.saveData('userInfo', { //this should go in storage too
                    id: data._id,
                    username: data.username,
                    logged: true
                });
                storage.saveData('authToken', data._kmd.authtoken);
                notify.showInfo('Login succesful.');
                ctx.redirect('#/');


            }).catch((err) => {
                notify.handleError(err);
            });
    }

    const logout = function (ctx) {
        userModel.logout()
            .then(() => {
                storage.deleteData('authToken');
                storage.deleteData('userInfo');
                notify.showInfo('Logout seccessful.');
                ctx.redirect('#/');

            }).catch(notify.handleError)
    };
    const getRegister = function (ctx) {

        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/forms/register.hbs');

        })
    }
    const postRegister = function (ctx) {

        userModel.registrate(ctx.params)
            .then((data) => {
                storage.saveData('userInfo', {
                    id: data._id,
                    username: data.username,

                });

                storage.saveData('authToken', data._kmd.authtoken);
                notify.showInfo('User registration successful.');
                ctx.redirect('#/');
            })
            .catch((err) => {
                notify.handleError(err);
            });
    }

    return {
        getLogin,
        postLogin,
        logout,
        getRegister,
        postRegister
    };
})();