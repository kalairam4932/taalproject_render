import aircraftdata from "../model/aircraft.model.js"

export const postaircraftdata = async(req,res)=>{
    try {
        const {regno,
            category,
            owner,
            hourtype,
            operator,
            manufacture,
            model,
            serialno,
            maintananceservice,
            warrantystartdate,
            warrantyenddate,
            aircraftunderwarranty
        } = req.body
        
        const newpostaircraftdata = new aircraftdata({
        regno,
        category,
        owner,
        hourtype,
        operator,
        manufacture,
        model,
        serialno,
        maintananceservice,
        warrantystartdate,
        warrantyenddate,
        aircraftunderwarranty

        })
        if(newpostaircraftdata){

            await newpostaircraftdata.save();
            return res.status(200).json(newpostaircraftdata)

        }
  

        
    } catch (error) {
        console.log(`error in aircraftform post ${error}`)
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }

}


export const getpostaircraftdata = async(req,res)=>{
    try {
        const alldata = await aircraftdata.find();

        if(alldata.length===0){
            return res.status(200).json([]);
        }

        res.status(200).json(alldata)
        
    } catch (error) {
        console.log(`error in get function ${error}`);
        return res.status(500).json({
            error: "Internal Server ERROR"
        })
    }
}