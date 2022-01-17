"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var knex_1 = require("knex");
var objection_1 = require("objection");
dotenv.config({ path: __dirname + '/../.env' });
// Initialize knex.
var knexVar = (0, knex_1.default)({
    client: 'pg',
    version: '7.2',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'postgres'
    },
    searchPath: ['mosaik_db']
});
objection_1.Model.knex(knexVar);
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Users, "tableName", {
        get: function () {
            return 'Users';
        },
        enumerable: false,
        configurable: true
    });
    ;
    return Users;
}(objection_1.Model));
exports.default = Users;
