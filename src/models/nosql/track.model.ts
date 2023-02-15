import mongoose, { Schema, model } from 'mongoose';
import { Track } from '../../interfaces/track.interface';

const TrackSchema = new Schema<Track>(
    {
        name: { type: String },
        album: { type: String },
        cover: {
            type: String, 
            validate: {
                validator: () => {
                    return true;
                },
                message: "ERROR_URL"
            },
        },
        artist: {
            name: { type: String },
            nickname: { type: String },
            nationality: { type: String }
        }, 
        duration: {
            start: { type: Number },
            end: { type: Number }
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const TrackModel = model("tracks", TrackSchema);
export default TrackModel;