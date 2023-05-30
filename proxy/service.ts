import {HttpServiceInterface} from "./interface";

export class HttpService implements HttpServiceInterface {
    public get(id: number): string {
        return Math.exp(Math.log(id)).toString();
    }
}
