import {HttpServiceInterface} from "./interface";
import {HttpService} from "./service";

export class HttpCacheProxy implements HttpServiceInterface {
    private serviceInstance = new HttpService();
    private cache = new Map<number, string>([]);

    public get(id: number): string {
        const isIncludes = this.cache.has(id);
        if (isIncludes) {
            return this.cache.get(id);
        }

        const newValue = this.serviceInstance.get(id);
        this.cache.set(id, newValue);

        return newValue;
    }
}
