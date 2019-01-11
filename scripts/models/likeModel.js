const likeModel = (function () {

    const like = function (info) {
        
         const url = `/appdata/${storage.appKey}/pets/${info.likeId}`;
        let likes = Number(info.likes) + 1;

        let data = {
            name: info.name,
            imageURL: info.imageURL,
            category: info.category,
            description: info.description,
            likes: likes,
        }
        return requester.put(url, data);
    }

    return {
        like
    }
})();