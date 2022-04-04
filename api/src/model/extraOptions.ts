import {prop, modelOptions} from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class extraOptions {
    @prop()
    text: String
}