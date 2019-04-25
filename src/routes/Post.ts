import * as express from "express";
import RoutesInterface from '../interface/RoutesInterface';

class Post implements RoutesInterface {

    private _route: string = "/";

    public register(server: any): void {
        server.get(this._route, this._get);
        server.put(this._route, this._put);
        server.post(this._route, this._post);
        server.delete(this._route, this._delete);
    }

    private _get(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        return res.send({success: true});
    }

    private _put(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        return res.send({success: true});
    }

    private _post(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        return res.send({success: true});
    }

    private _delete(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        return res.send({success: true});
    }
}

export default new Post();