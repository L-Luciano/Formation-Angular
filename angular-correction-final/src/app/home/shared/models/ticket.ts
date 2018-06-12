export class Ticket {
    private _name: string;
    private _description: string;
    private _expiration: number;
    private _nbLefts: number;
    private _urlImage: string;

    constructor({name = '', description = '', expiration = 0, nbLefts = 0, urlImage = ''}: { name ?: string, description ?: string, expiration ?: number, nbLefts ?: number, urlImage ?: string }) {
        this.name = name;
        this.description = description;
        this.expiration = expiration; // En millitimestamp
        this.nbLefts = nbLefts;
        this.urlImage = urlImage;
    }

    public copy(): Ticket {
        return new Ticket(this);
    }

    /* GETTERS - SETTERS */
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get expiration(): number {
        return this._expiration;
    }

    set expiration(value: number) {
        this._expiration = value;
    }

    get nbLefts(): number {
        return this._nbLefts;
    }

    set nbLefts(value: number) {
        this._nbLefts = value;
    }

    get urlImage(): string {
        return this._urlImage;
    }

    set urlImage(value: string) {
        this._urlImage = value;
    }
}
