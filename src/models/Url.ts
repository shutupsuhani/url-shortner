import { Schema, Document, model, models } from 'mongoose';

export interface IUrl extends Document {
  longUrl: string;
  shortUrl: string;
  hash: string;
}

const UrlSchema = new Schema<IUrl>({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
    unique: true,
  },
});

const Url = models.Url || model<IUrl>('Url', UrlSchema);
export default Url;
