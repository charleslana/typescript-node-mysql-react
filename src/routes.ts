import {Router} from 'express';
import {celebrate, Joi} from 'celebrate';
import multer from 'multer';
import multerConfig from './config/multer';

import LocationsController from "./controllers/LocationsController";
import ItemsController from "./controllers/ItemsController";

const routes = Router();
const upload = multer(multerConfig);

const itemsController = new ItemsController();
const locationsController = new LocationsController();

routes.get('/items', itemsController.index);

routes.get('/locations/:id', locationsController.show);

routes.get('/locations', locationsController.index);

routes.post('/locations',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required().messages({
                'string.base': `"name" deve ser um tipo de 'texto'`,
                'string.empty': `"name" não pode ser um campo vazio`,
                'string.min': `"name" deve ter um tamanho mínimo de {#limit}`,
                'string.max': `"name" deve ter um tamanho máximo de {#limit}`,
                'any.required': `"name" é um campo obrigatório`
            }),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required().min(9),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required().min(1),
        })
    }, {
        abortEarly: false
    }),
    locationsController.create

);

export default routes;