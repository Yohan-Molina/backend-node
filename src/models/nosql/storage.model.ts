import { Schema ,model } from 'mongoose';
import { Storage } from '../../interfaces/storage.interface';


const StorageSchema = new Schema<Storage>(
    {
        url: { type: String, required: true },
        filename: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const StorageModel = model("storages", StorageSchema);
export default StorageModel;