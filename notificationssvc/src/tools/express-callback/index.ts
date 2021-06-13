import { validationResult } from 'express-validator'
import { StatusCodes } from 'http-status-codes'
export default function makeExpressCallback (controller) {
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
      }
      const validationErrors = validationResult(req);
      if (!validationErrors.isEmpty()) {
          return res.status(StatusCodes.BAD_REQUEST).send({ error: validationErrors.array() })
      }
      controller(httpRequest, StatusCodes)
          .then(httpResponse => {
              if (httpResponse.headers) {
                  res.set(httpResponse.headers)
              }
              res.type('json')
              res.status(httpResponse.statusCode).send(httpResponse.body)
          })
          .catch(e => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error: 'An unknown error occurred.'}))
    }
}
