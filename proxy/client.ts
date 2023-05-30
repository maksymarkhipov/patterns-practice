import {HttpService} from "./service";
import {HttpCacheProxy} from "./http-cache-proxy";

(() => {
    // Without proxy
    const service = new HttpService();
    const resultWithoutProxy = service.get(1);
    console.log('resultWithoutProxy', resultWithoutProxy);

    // With proxy
    const proxy = new HttpCacheProxy();
    const resultWithProxy = proxy.get(1);
    console.log('resultWithProxy', resultWithProxy);
})();
