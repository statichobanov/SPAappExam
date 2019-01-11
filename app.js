const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/', home.index);

    this.post('#/register', user.postRegister);
    this.get('#/register', user.getRegister);

    this.post('#/login', user.postLogin);
    this.get('#/login', user.getLogin);
    this.get('#/logout', user.logout);

    this.get('#/pet/allCats', pet.getCats);
    this.get('#/pet/allDogs', pet.getDogs);
    this.get('#/pet/allParrots', pet.getParrots);
    this.get('#/pet/allReptiles', pet.getReptiles);
    this.get('#/pet/allOther', pet.getOthers);
    this.get('#/pet/allPets', pet.getAll);

    this.get('#/pet/create', pet.getCreatePet);
    this.post('#/pet/create', pet.createPet);

    this.post('#/pet/delete', pet.deletePet);

    this.get('#/pet/edit', pet.getEditPet);
    this.post('#/pet/edit', pet.postEdit);


    this.get('#/pet/mypets', pet.myPets);
    
    this.get('#/pet/details', pet.getDetails);

    this.post('#/pet/likes', like.postLike);
});

(function () {
    app.run('#/');
})();