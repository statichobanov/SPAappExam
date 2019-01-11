const pet = (function () {
    const listPets = function () {
        return petModel.getAll();
    }

    const getDetails = function (ctx) {
        
        petModel.details(ctx.params.detailsId).then((res) => {
            ctx.user = true;
            ctx.username = storage.getData('userInfo').username;
            ctx.name = res.name;
            ctx.imageURL = res.imageURL;
            ctx.description = res.description;
            ctx.likes = res.likes
            ctx._id = res._id;
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs',

            }).then(function () {
                this.partial('./views/pets/details.hbs');

            })
        });

    }
    const myPets = function (ctx) {
        let userInfo = storage.getData('userInfo');
        petModel.getMyPets(userInfo.id)
            .then((res) => {
                ctx.pets = res;
                ctx.user = true;
                ctx.username = userInfo.username;
                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',

                }).then(function () {
                    this.partial('./views/pets/mypets.hbs');
                })
            })
    }
    const getCreatePet = function (ctx) {
        ctx.user = true;
        ctx.username = storage.getData('userInfo').username;
        ctx.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/forms/pet-create.hbs');
        })

    }
    const createPet = function (ctx) {
        petModel.create(ctx.params).then(() => {
            notify.showInfo('Pet created');
            ctx.redirect('#/');
        })
    }
    const getCats = function (ctx) {

        petModel.getAll()
            .then((res) => {
                let userInfo = storage.getData('userInfo');
                let result = res.filter(pet => {
                    pet.isCreator = pet._acl.creator === userInfo.id;
                    return pet.category === 'Cat';
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
            });

    }
    const getDogs = function (ctx) {

        petModel.getAll()
            .then((res) => {
                let userInfo = storage.getData('userInfo');
                let result = res.filter(pet => {
                    pet.isCreator = pet._acl.creator === userInfo.id;
                    return pet.category === 'Dog';
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
            });
    }
    const getParrots = function (ctx) {

        petModel.getAll()
            .then((res) => {
                let userInfo = storage.getData('userInfo');
                let result = res.filter(pet => {
                    pet.isCreator = pet._acl.creator === userInfo.id;
                    return pet.category === 'Parrot';
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
            });
    }
    const getReptiles = function (ctx) {

        petModel.getAll()
            .then((res) => {
                let userInfo = storage.getData('userInfo');
                let result = res.filter(pet => {
                    pet.isCreator = pet._acl.creator === userInfo.id;
                    return pet.category === 'Reptile';
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
            });
    }
    const getOthers = function (ctx) {

        petModel.getAll()
            .then((res) => {
                let userInfo = storage.getData('userInfo');
                let result = res.filter(pet => {
                    pet.isCreator = pet._acl.creator === userInfo.id;
                    return pet.category === 'Other';
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
            });
    }
    const getAll = function (ctx) {

        petModel.getAll()
            .then((res) => {

                let userInfo = storage.getData('userInfo');
                res.forEach(pet => {
                    pet.isCreator = pet._acl.creator === userInfo.id;
                });
                ctx.pets = res;
                ctx.user = userInfo.logged;
                ctx.username = userInfo.username;
                ctx.loadPartials({
                    header: './views/common/header.hbs',
                    footer: './views/common/footer.hbs',
                    listAll: './views/pets/list-all.hbs'
                }).then(function () {
                    this.partial('./views/home.hbs');

                }).catch(notify.handleError);
            });
    }
    const deletePet = function (ctx) {
        petModel.remove(ctx.params.deleteId)
            .then(() => {
                notify.showInfo('Pet removed successfully!');
                ctx.redirect('#/');
            })
    }
    const getEditPet = function (ctx) {
        petModel.getMyPet(ctx.params.editId).then(res => {
            ctx.user = true;
            ctx.username = storage.getData('userInfo').username;
            ctx.name = res.name;
            ctx.imageURL = res.imageURL;
            ctx.description = res.description;
            ctx.likes = res.likes
            ctx._id = res._id;
            ctx.loadPartials({
                header: './views/common/header.hbs',
                footer: './views/common/footer.hbs',

            }).then(function () {
                this.partial('./views/forms/pet-edit.hbs');
            })
        });

    }
    const postEdit = function (ctx) {

        petModel.edit(ctx.params).then((res) => {
            notify.showInfo('Updated successfully!');
            ctx.redirect('#/');
        })
    }
    return {
        listPets,
        getDetails,
        myPets,
        createPet,
        getCreatePet,
        getCats,
        getDogs,
        getParrots,
        getReptiles,
        getOthers,
        getAll,
        deletePet,
        getEditPet,
        postEdit
    }
})();