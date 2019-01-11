const userModel = (function () {

    const login = function (username, password) {
        if (username.length === 0) {
            notify.showError('Fields should be non empty');
            return;
        } else if (password.length === 0) {
            notify.showError('Fields should be non empty');
            return;
        };

        let auth = btoa(`${username}:${password}`);
        let headers = {
            'Authorization': 'Basic ' + auth
        };
        let data = {
            username,
            password
        };
        let url = `/user/${storage.appKey}/login`

        return requester.post(url, data, headers);
    }
    const logout = function (username, password) {
        let url = `/user/${storage.appKey}/_logout`;

        return requester.post(url)
    }

    const registrate = function (userInfo) {
        let url = `/user/${storage.appKey}`;
        let data = {};

        if (userInfo.username.length < 3) {
            notify.showError('Username must be at least 3 symbols');
            return;
        } else if (userInfo.password.length < 6) {
            notify.showError('Password must be non-empty or atleast 6 symbols long !');
            return;
        } else {
            data = {
                username: userInfo.username,
                password: userInfo.password,
            };
        }

        let auth = btoa(`${storage.appKey}:${storage.appSecret}`);
        let headers = {
            Authorization: 'Basic ' + auth
        };

        return requester.post(url, data, headers);
    }

    return {
        login,
        logout,
        registrate
    }
})();