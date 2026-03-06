import { Router } from 'express'

import { TableController } from '../controllers/tables-controller'

const tablesRoutes = Router()

const tableController = new TableController()

tablesRoutes.get('/', tableController.index)

export { tablesRoutes }