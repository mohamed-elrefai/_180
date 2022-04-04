import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose';
import { nanoid } from 'nanoid';


@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
class User{

    @prop({required: true, default: () => nanoid()})
    userIdToken: string

    @prop({ required: true })
    username: string

    @prop({ required: true, unique: true })
    email: string

    @prop({ required: true, min: 6 })
    password: string

    @prop({ default:"" })
    image: String
}
const Users = getModelForClass(User)
export default Users;