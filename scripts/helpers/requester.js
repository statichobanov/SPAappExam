const requester = (function () {
    const baseUrl = 'https://baas.kinvey.com';

    const call = (url, data, headers, method) => {
        data = data || {};
        headers = headers || {};
        url = baseUrl + url;
        
        headers['Content-Type'] = 'application/json';
        headers['X-Kinvey-API-Version'] = 3;

        if (!!storage.getData('authToken')) {
            headers.Authorization = 'Kinvey ' + storage.getData('authToken');
        }
        
        return $.ajax({
            url:url,
            method:method,
            headers:headers,
            data: JSON.stringify(data)
        });
    };

    const get = (url,data,headers)=>{
        return call(url,data,headers,'GET');
    };

    const post = (url,data,headers)=>{
        
        return call(url,data,headers,'POST');
    };
    
    const put = (url,data,headers)=>{
        return call(url,data,headers,'PUT');
    };

    const remove = (url,data,headers)=>{
        return call(url,data,headers,'DELETE');
    };
    
    return {
        get,
        post,
        put,
        remove
    }
})();