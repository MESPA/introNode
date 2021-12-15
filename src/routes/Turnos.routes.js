import { Router } from "express"
import {getTurnos,getTurnosById} from '../controller/Turnos.controller'
const router = Router()

router.get('/Turnos',getTurnos)
//router.post('/Turnos',createnewTurno)
router.get('/Turnos/:id',getTurnosById);
router.delete('/Turnos')
router.put('/Turnos')

export default router