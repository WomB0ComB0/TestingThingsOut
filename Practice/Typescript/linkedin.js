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
exports.LinkedInConnection = exports.LinkedInAccount = void 0;
var LinkedInAccount = /** @class */ (function () {
    function LinkedInAccount(id, name, connections, is_connected) {
        this._id = id;
        this.name = name;
        this.connections = connections;
        this.is_connected = is_connected;
    }
    LinkedInAccount.prototype.getEmail = function () {
        return this.email;
    };
    LinkedInAccount.prototype.setEmail = function (email) {
        this.email = email;
    };
    LinkedInAccount.prototype.getPhone = function () {
        return this.phone;
    };
    LinkedInAccount.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    LinkedInAccount.prototype.getPassword = function () {
        return this.password;
    };
    LinkedInAccount.prototype.setPassword = function (password) {
        this.password = password;
    };
    LinkedInAccount.userBlob = function (account) {
        return {
            _id: account._id,
            name: account.name,
            email: account.email,
            phone: account.phone,
            password: account.password
        };
    };
    return LinkedInAccount;
}());
exports.LinkedInAccount = LinkedInAccount;
var LinkedInConnection = /** @class */ (function (_super) {
    __extends(LinkedInConnection, _super);
    function LinkedInConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LinkedInConnection.prototype, "connected", {
        get: function () {
            return this.is_connected;
        },
        enumerable: false,
        configurable: true
    });
    LinkedInConnection.findConnections = function (connections, name) {
        var results = [];
        for (var _i = 0, connections_1 = connections; _i < connections_1.length; _i++) {
            var connection_1 = connections_1[_i];
            if (connection_1.name === name) {
                results.push(connection_1);
            }
        }
        return results;
    };
    LinkedInConnection.findConnection = function (connections, id) {
        for (var _i = 0, connections_2 = connections; _i < connections_2.length; _i++) {
            var connection_2 = connections_2[_i];
            if (connection_2._id === id) {
                return connection_2;
            }
        }
        return null;
    };
    LinkedInConnection.connect = function (connections, connection) {
        connections.push(connection);
    };
    LinkedInConnection.disconnect = function (connections, connection) {
        var index = connections.indexOf(connection);
        if (index !== -1) {
            connections.splice(index, 1);
        }
    };
    LinkedInConnection.getConnections = function (connections) {
        return connections;
    };
    LinkedInConnection.getConnected = function (connections) {
        return connections.filter(function (connection) { return connection.is_connected; });
    };
    return LinkedInConnection;
}(LinkedInAccount));
exports.LinkedInConnection = LinkedInConnection;
var user = new LinkedInAccount("1", "John Doe", [], false);
user.setEmail("mikeodnis3242004@gmail.com");
user.setPhone("934-218-7852");
user.setPassword("password");
var connection = new LinkedInConnection("2", "Jane Doe", [], false);
connection.setEmail("example@email.com");
var userBlob = {
    _id: user._id,
    name: user.name,
    connections: user.connections,
    is_connected: user.is_connected,
    email: user.getEmail(),
    phone: user.getPhone(),
    password: user.getPassword()
};
var connectionBlob = {
    _id: connection._id,
    name: connection.name,
    connections: connection.connections,
    is_connected: connection.is_connected
};
console.log(userBlob);
console.log(connectionBlob);
var connections = [connection];
LinkedInConnection.connect(connections, connection);
console.log(LinkedInConnection.findConnections(connections, "Jane Doe"));
console.log(LinkedInConnection.findConnection(connections, "2"));
console.log(LinkedInConnection.getConnections(connections));
console.log(LinkedInConnection.getConnected(connections));
LinkedInConnection.disconnect(connections, connection);
console.log(LinkedInConnection.getConnections(connections));
console.log(LinkedInConnection.getConnected(connections));
LinkedInConnection.connect(connections, connection);
console.log(LinkedInConnection.getConnections(connections));
console.log(LinkedInConnection.getConnected(connections));
