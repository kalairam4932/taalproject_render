import mongoose, { Schema } from "mongoose";

const aircraft = new Schema({
    // registration_details:{
    //     reg_no:{type:String},
    //     category : {type:String},
    //     owner:{type:String},
    //     hourstype:{type:String},
    //     opertore:{type:String}


    // },
    // aircraft_details :{
    //     manufacturer : {type:String},
    //     model : {type:String},
    //     serial_no: {type:String},
    //     maintances_services : {type:String}

    // },
    // warranty_details :{
    //     aircraft_under_warranty:{type:Boolean},
    //     warranty_start_date:{type:Date},
    //     warranty_end_date:{type:Date}
    // }

    regno:{
        type: String
    },
    category:{
        type:String
    },
    owner:{
        type:String
    },
    hourtype:{
        type:String
    },
    operator:{
        type:String
    },
    manufacture:{
        type:String
    },
    model:{
        type:String
    },
    serialno:{
        type:String
    },
    maintananceservice:{
        type:String
    },
    warrantystartdate:{
        type:String
    },warrantyenddate :{
        type:String
    },aircraftunderwarranty :{
        type:Boolean
    }
},{timestamps:true})

const aircraftdata = mongoose.model("aircraft",aircraft);
export default aircraftdata;