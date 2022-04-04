import {prop, getModelForClass, modelOptions, Ref} from '@typegoose/typegoose';
import { extraOptions } from './extraOptions'
import { nanoid } from 'nanoid';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

class ExtraOptions{
    text : String
}

class Product {
    
    @prop({required: true, default: () => nanoid()})
    userIdToken: string

    @prop({ required: true, maxlength: 60 })
    title: String

    @prop({ required: true, maxlength: 600 })
    desc: String

    @prop({ default: "user.png" })
    image: String

    @prop({ type: String })
    prices: String

    @prop({ type: () => [extraOptions] })
    extraOptions: extraOptions[]


}

const Products = getModelForClass(Product);

export default Products