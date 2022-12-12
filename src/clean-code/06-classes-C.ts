(() => {
    //  Aplicando el "principio de responsabilidad única"
    //  Priorizar la composición frente a la herencia.

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
        email       : string;
        role        : string;
    }

    class User {
    
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor ({email, role}: UserProperties) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProperties {
        lastOpenFolder             : string;
        workingDirectory           : string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor ({lastOpenFolder, workingDirectory}: SettingsProperties) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProperties {
        birthdate             : Date;
        email                 : string;
        gender                : Gender;
        lastOpenFolder        : string;
        name                  : string;
        role                  : string;
        workingDirectory      : string;
    }

    //  Vamos a priorizar la composicion(composicion de clases) en lugar de la herencia
    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate, email, role, lastOpenFolder, workingDirectory
        }: UserSettingsProperties){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }

    }

    const userSettings = new UserSettings({
        birthdate: new Date('1995-01-30'),
        email: 'engfranciscomorenoq@gmail.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Franco',
        role: 'Admin',
        workingDirectory: '/usr/home/',
    });

    console.log({ userSettings })

})();
