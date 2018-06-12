export interface UserInfosInterface {
    pseudo: string;
    birthdate: number;
    email: string;
    firstname: string;
    gender: string;
    lastname: string;
    role: string;
    status: string;
    logged: boolean;
}

export class User {
    private _pseudo: string;
    private _birthdate: number;
    private _email: string;
    private _firstname: string;
    private _gender: string;
    private _lastname: string;
    private _role: string;
    private _status: string;
    private _logged: boolean;

    constructor() {
        // Initialisation de nos variables
        this.logged = false;
    }

    /* NOS METHODES */
    public login(servResult: UserInfosInterface): boolean {
        // Affectation des retours serveurs
        this.pseudo = servResult.pseudo;
        this.birthdate = servResult.birthdate;
        this.email = servResult.email;
        this.firstname = servResult.firstname;
        this.gender = servResult.gender;
        this.lastname = servResult.lastname;
        this.role = servResult.role;
        this.status = servResult.status;
        this.logged = true;

        return true;
    }

    /* GETTERS AND SETTERS */
    get logged(): boolean {
        return this._logged;
    }

    set logged(value: boolean) {
        this._logged = value;
    }

    get pseudo(): string {
        return this._pseudo;
    }

    set pseudo(value: string) {
        this._pseudo = value;
    }

    get birthdate(): number {
        return this._birthdate;
    }

    set birthdate(value: number) {
        this._birthdate = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}
