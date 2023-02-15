export interface Track {
    name: string;
    album: string;
    cover: string;
    artist: Artist,
    duration: {
        start: number;
        end: number;
    };
    mediaId: any;
}

interface Artist {
    name: string;
    nickname: string;
    nationality: string;
};