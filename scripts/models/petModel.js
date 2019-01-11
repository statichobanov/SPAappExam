const petModel = (function () {
    const getAll = function () {
        const url = `/appdata/${storage.appKey}/pets?query={}&sort={"likes": -1}`;
        return requester.get(url);
    }
    const create = function (info) {
        const url = `/appdata/${storage.appKey}/pets`;
        let data = {
            "name": info.name,
            "description": info.description,
            "imageURL": info.imageURL,
            "category": info.category,
            "likes": "0"
        };
        return requester.post(url, data);
    }
    const getMyPets = function (id) {
        let url = `/appdata/${storage.appKey}/pets?query={"_acl.creator":"${id}"}`;
        return requester.get(url);
    }
    const remove = function (id) {
        const url = `/appdata/${storage.appKey}/pets/${id}`;
        return requester.remove(url)
    }
    const getMyPet = function (id) {
        const url = `/appdata/${storage.appKey}/pets/${id}`;
        return requester.get(url);
    }
    const edit = function (info) {

        let url = `/appdata/${storage.appKey}/pets/${info.editId}`;
        let data = {
            description: info.description,
            name: info.name,
            imageURL: info.imageURL,
            likes: info.likes,
            category: info.category
        };
        return requester.put(url, data);
    }

    const details = function(id){
        let url = `/appdata/${storage.appKey}/pets/${id}`;
        return requester.get(url);
    }
    return {
        getAll,
        create,
        getMyPets,
        remove,
        getMyPet,
        edit,
        details
    }
})();