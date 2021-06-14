"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent')
            }
        };
        //validators
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors);
        }
        controller(httpRequest, req)
            .then(httpResponse => {
            if (httpResponse.headers) {
                res.set(httpResponse.headers);
            }
            res.type('json');
            res.status(httpResponse.statusCode).send(httpResponse.body);
        })
            .catch(e => res.status(500).send({ error: 'An unkown error occurred.' }));
    };
}
exports.default = makeExpressCallback;
//# sourceMappingURL=index.js.map