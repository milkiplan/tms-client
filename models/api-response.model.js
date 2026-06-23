"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderResponse = renderResponse;
function renderResponse(response, formatter) {
    switch (response.status) {
        case "loading":
            return "Loading...";
        case "success":
            return formatter(response.data);
        case "error":
            return `Error ${response.statusCode}: ${response.message}`;
        default: {
            const _check = response;
            throw new Error(`Unhandled response state: ${JSON.stringify(_check)}`);
        }
    }
}
