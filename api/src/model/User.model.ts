import { prop , getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

class User{

    @prop({required: true})
    username: String

    @prop({required: true, unique: true})
    email: String

    @prop({required: true, min: 6})
    password: String

    @prop({default: ""})
    img: String
}

const UserSchema = getModelForClass(User);

export default UserSchema