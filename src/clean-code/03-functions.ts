(() => {

    // función para obtener información de una película por Id
    function getMovieInfoByID( movieID: string ) {
        console.log({ movieID });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastByID( movieID: string ) {
        console.log({ movieID });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioByID( actorID: string ) {
        console.log({ actorID });
    }
    
    interface Movie {
        cast       : string[];
        description: string;
        rating     : number;
        title      : string;
    };
    // Crear una película
    function createMovie({title, description, rating, cast}: Movie){
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): {
        
        // operacion para crear un actor 
        // ..
        // .. Almacen de actor en BD

        // retorna mensaje de creacion de actor satisfactoria 

    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        let result: number;

        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return ( isRetired ) ? 3000 : 4000;
    }

})();
