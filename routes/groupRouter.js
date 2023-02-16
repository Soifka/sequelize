const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const GroupController = require('../controllers/Group.controller');
const { getUserInstance } = require('../middlewares/user.mv');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  })

const upload = multer({ storage: storage });


const groupRouter = Router();

groupRouter.post('/', GroupController.createGroup);
groupRouter.post('/:groupId', upload.single('groupAvatar'), GroupController.createGroupImage);
groupRouter.put('/:userId/:groupId', getUserInstance, GroupController.addUserToGroup);
groupRouter.get('/:userId', getUserInstance, GroupController.getUserGroups);
groupRouter.get('/get-users/:groupId', GroupController.getGroupWithUsers);
groupRouter.delete('/:userId/:groupId', getUserInstance, GroupController.deleteUserFromGroup);


module.exports = groupRouter;