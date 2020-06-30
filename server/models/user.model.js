const mongooes=require('mongoose');
const Schema=mongooes.Schema;

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String}
},{
    versionKey:false
});

const user=mongooes.model('users',userSchema);
module.exports=user;