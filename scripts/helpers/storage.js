const storage = (function () {
    const appKey = 'kid_HyO0TCQg4';

    const appSecret = '377662a63be845ab9c4ac5699faf7390';

    const saveData = (key, value) => {
        localStorage.setItem(appKey + key, JSON.stringify(value));
    };

    const getData = (key) => {
        return JSON.parse(localStorage.getItem(appKey + key));
    };

    const deleteData = (key) => {
        localStorage.removeItem(appKey + key);
    }

    return{
        saveData,
        getData,
        deleteData,
        appKey,
        appSecret
    }
})();