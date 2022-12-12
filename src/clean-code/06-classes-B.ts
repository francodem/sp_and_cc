(() => {

    type Gender = 'M'|'F';

    interface PersonProperties {
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }

    class Person {
        public birthdate: Date;
        public gender: string;
        public name: string;

        constructor({name, gender, birthdate}: PersonProperties) {
            this.birthdate   = birthdate;
            this.gender      = gender;
            this.name        = name;
        }
    }

    interface UserProperties {
        birthdate   : Date;
        email       : string;
        gender      : Gender;
        name        : string;
        role        : string;
    }

    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor ({email, role, name, gender, birthdate}: UserProperties) {
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProperties {
        birthdate                  : Date;
        email                      : string;
        gender                     : Gender;
        lastOpenFolder             : string;
        name                       : string;
        role                       : string;
        workingDirectory           : string;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor ({birthdate, email, gender, lastOpenFolder, name, role, workingDirectory}: UserSettingsProperties) {
            super({birthdate, email, gender, name, role});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: '/usr/home/',
        lastOpenFolder: '/home',
        email: 'engfranciscomorenoq@gmail.com',
        role: 'Admin',
        name: 'Franco',
        gender: 'M',
        birthdate: new Date('1995-01-30')
    });

    console.log({ userSettings })

})();