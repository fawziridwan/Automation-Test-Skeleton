const response = {
    statusOk: 200,
    statusCreate: 201,
    statusAccepted: 202,
    statusNoContent: 204,
    statusInvalidRequest: 400,
    statusWithoutLogin: 401,
    statusForbidden: 403,
    statusNotFound: 404,
    statusInternalServerError: 500,
};

const cases = {
    created: 'The request has been fulfilled and has resulted in one or more new resources being created.',
    noContent: 'There is no content to send for this request',
    invalidRequest: 'payload is invalid',
    invalidToken: 'get http error code 401, when token invalid',
    blankToken: 'get http error code 401, when token blank',
    expiredToken: 'get http error code 401, when token is expired',
    forbidden: 'forbidden',
    notFound: 'endpoint / id / query parameter not found'
};

module.exports = {
    response,
    cases
};