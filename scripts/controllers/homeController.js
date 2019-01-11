const home = (function () {
    const index = function (ctx) {
        let userIsLogged = storage.getData('userInfo'); //returns null if not logged in 

        if (userIsLogged) {

            pet.listPets()
                .then((res) => {

                    let userInfo = storage.getData('userInfo');
                    let result = res.filter(pet => {
                       return pet._acl.creator !== userInfo.id;
                    });
                    ctx.pets = result;
                    ctx.user = userInfo.logged;
                    ctx.username = userInfo.username;
                    ctx.loadPartials({
                        header: './views/common/header.hbs',
                        footer: './views/common/footer.hbs',
                        listAll: './views/pets/list-all.hbs'
                    }).then(function () {
                        this.partial('./views/home.hbs');

                    }).catch(notify.handleError);



                }).catch(notify.handleError);

        } else {

            ctx.user = false;
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs'
            }).then(function () {
                this.partial('./views/home.hbs');
            }).catch(notify.handleError);

        }
    }

    return {
        index
    }
})();