const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _lastName: String,
    _email: String,
    _birthDate: Date,
    _CURP: String,
    _RFC: String,
    _password: String,
    _salt: String,
    _address: {
        street: String,
        number: String,
        zip: Number,
        city: String,
        state: String,
        country: String
    },
    _skills: [
        {
            name: String,
            level: {
                enum: ['JUNIOR','SENIOR','MASTER']
            }
        }
    ],
    _role: {
        enum: ['SCRUM_MASTER','PRODUCT_OWNER','DEVELOPER']
    }
});

class User {
    constructor(name,lastName,email,birthDate,CURP,RFC,password,salt,address,skills,role) {
        this._name= name;
        this._lastName= lastName;
        this._email=email;
        this._birthDate= birthDate;
        this._CURP= CURP;
        this._RFC= RFC;
        this._password= password;
        this._salt = salt;
        this._address= address;
        this._skills= skills;
        this._role= role;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get birthDate() {
        return this._birthDate;
    }

    set birthDate(value) {
        this._birthDate = value;
    }

    get CURP() {
        return this._CURP;
    }

    set CURP(value) {
        this._CURP = value;
    }

    get RFC() {
        return this._RFC;
    }

    set RFC(value) {
        this._RFC = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get salt() {
        return this._salt;
    }

    set password(value) {
        this._salt = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get skills() {
        return this._skills;
    }

    set skills(value) {
        this._skills = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }
}

schema.loadClass(User);

module.exports = mongoose.model('User', schema);
