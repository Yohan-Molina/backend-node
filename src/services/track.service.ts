import { Track } from "../interfaces/track.interface";
import TrackModel from "../models/nosql/track.model";

const insertTrack = async (track: Track) => {
    const response = await TrackModel.create(track);
    return response;
};

const getAllTracks = async () => {
    const response = await TrackModel.find({});
    return response;
};

const getTrackById = async (id: string) => {
    const response = await TrackModel.findOne({ _id: id });
    return response;
}

const updateTrackById = async (id: string, track: Track) => {
    const response= await TrackModel.findOneAndUpdate(
        {_id: id }, track, { new: true });
    return response;
}

const deleteTrackById = async (id: string) => {
    const response = await TrackModel.remove({ _id: id });
    return response;
}

export { insertTrack, getAllTracks, getTrackById, updateTrackById, deleteTrackById }