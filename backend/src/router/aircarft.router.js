import express from 'express';
import {postaircraftdata,getpostaircraftdata} from '../controller/aircraft_form_controller.js'
const router = express.Router();

router.post('/postaircraftdata',postaircraftdata)
router.get('/',getpostaircraftdata)



export default  router