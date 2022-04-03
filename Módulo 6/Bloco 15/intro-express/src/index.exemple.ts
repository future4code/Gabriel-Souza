import express, { Request, Response } from "express";
import cors from "cors";

import { users } from "./utils/data";

//* Isntall Noddemon
//* npm i nodemon ts-node --save-dev

const app = express();

app.use(express.json());
app.use(cors());

//* Enviar playlists
app.get("/playlists", ( request: Request, response: Response ) => {
    const playlists = users.map(( user ) => user.playlists).flat(1);

    response.status(210).send( playlists );
});

//* Pegar playlists especifica com as tracks pelo id
app.get("/tracks", ( request: Request, response: Response ) => {
    const IDPlaylist = request.query.id;

    if ( !IDPlaylist ) {
        response.status(400).send("O id da playlist é obrigatorio.");
    };

    const playlists = users.map(( user ) => user.playlists ).flat(1);

    let tracks;
    playlists.forEach(( playlist ) => {
        playlist.id === IDPlaylist ? tracks = playlist.tracks : false;
    });
    response.status(200).send( tracks );
});

//* Deletar Playlists
app.delete("/playlists", ( request: Request, response: Response ) => {
    const  IDPlaylist = request.query.id;

    if ( !IDPlaylist ) {
        response.status(400).send("O id da playlist e da track é obrigatorio.");
    };

    users.forEach(( user ) => {
        user.playlists = user.playlists.filter(( playlist ) => {
            return playlist.id !== IDPlaylist;
        });
    });
    response.status(200).send(users);
});


//* Deletar Track da Playlist
app.delete("/track", ( request: Request, response: Response ) => {
    const IDPlaylist = request.query.idPlaylist;
    const IDTrack = request.query.idTrack;

    if ( !IDPlaylist && !IDTrack ) {
        response.status(400).send("O id da playlist é obrigatorio.");
    };

    const allPlayLists =  users.map(( user ) => user.playlists ).flat(1);
    
    allPlayLists.forEach(( playlist ) => {
        if ( playlist.id === IDPlaylist ) {
           return  playlist.tracks = playlist.tracks.filter(( track ) => track.id !== IDTrack);
        };
    });
    response.status(200).send(allPlayLists);
});


// app.listen( 3003, () => {
//     console.log("Servidor estar rodando....");
// });


//* Exemplo da Aula
// app.get( "/Gabriel/:id", ( request: Request, response: Response ) => {
//     console.log("Deu Certo!");

//     const id = request.params.id;
//     const senha = request.headers;
//     const nome = request.body;
    
//     console.log(id, senha, nome)

//     response.status(201).send("GTA OK!");
// });