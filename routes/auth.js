const {Router} = require('express');
const { check} = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//Crear un Nuevo Usuario
router.post('/new',[
    check('name', 'El nombre es Obligarotorio ').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').isLength({ min: 6 }),
    validarCampos
], crearUsuario);


//Login de Usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').isLength({ min: 6 }),
    validarCampos
],loginUsuario );

//Validar y revalidar token
router.get('/renew', revalidarToken );




module.exports = router;