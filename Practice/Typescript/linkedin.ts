export class LinkedInAccount {
    public readonly _id: string;
    public readonly name: string;
    public readonly connections: LinkedInConnection[];
    public readonly is_connected: boolean;
    private email: string;
    private phone: string;
    private password: string;
    
    constructor(id: string, name: string, connections: LinkedInConnection[], is_connected: boolean) {
        this._id = id;
        this.name = name;
        this.connections = connections;
        this.is_connected = is_connected;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public static userBlob(account: LinkedInAccount): object {
        return {
            _id: account._id,
            name: account.name,
            email: account.email,
            phone: account.phone,
            password: account.password
        };
    }
}

export class LinkedInConnection extends LinkedInAccount {
    get connected(): boolean {
        return this.is_connected;
    }

    public static findConnections(connections: LinkedInConnection[], name: string): LinkedInConnection[] {
        let results: LinkedInConnection[] = [];
        for (let connection of connections) {
            if (connection.name === name) {
                results.push(connection);
            }
        }
        return results;
    }

    public static findConnection(connections: LinkedInConnection[], id: string): LinkedInConnection | null {
        for (let connection of connections) {
            if (connection._id === id) {
                return connection;
            }
        }
        return null;
    }

    public static connect(connections: LinkedInConnection[], connection: LinkedInConnection): void {
        connections.push(connection);
    }

    public static disconnect(connections: LinkedInConnection[], connection: LinkedInConnection): void {
        let index: number = connections.indexOf(connection);
        if (index !== -1) {
            connections.splice(index, 1);
        }
    }

    public static getConnections(connections: LinkedInConnection[]): LinkedInConnection[] {
        return connections;
    }

    public static getConnected(connections: LinkedInConnection[]): LinkedInConnection[] {
        return connections.filter((connection) => connection.is_connected);
    }
}

export interface UserBlob {
    _id: string;
    name: string;
    connections: LinkedInConnection[];
    is_connected: boolean;
    email: string;
    phone: string;
    password: string;
}

export interface ConnectionBlob {
    _id: string;
    name: string;
    connections: LinkedInConnection[];
    is_connected: boolean;
}

const user = new LinkedInAccount("1", "John Doe", [], false);
user.setEmail("mikeodnis3242004@gmail.com");
user.setPhone("934-218-7852");
user.setPassword("password");

const connection = new LinkedInConnection("2", "Jane Doe", [], false);
connection.setEmail("example@email.com");
const userBlob: UserBlob = {
    _id: user._id,
    name: user.name,
    connections: user.connections,
    is_connected: user.is_connected,
    email: user.getEmail(),
    phone: user.getPhone(),
    password: user.getPassword()
};

const connectionBlob: ConnectionBlob = {
    _id: connection._id,
    name: connection.name,
    connections: connection.connections,
    is_connected: connection.is_connected
};

console.log(userBlob);
console.log(connectionBlob);

const connections: LinkedInConnection[] = [connection];
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