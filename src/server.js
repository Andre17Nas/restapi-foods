"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get('/', function (request, response) {
    response.status(200).json({
        message: 'hello world',
    });
});
app.listen('7777', function () {
    console.log('Server is listen on port:7777');
});
