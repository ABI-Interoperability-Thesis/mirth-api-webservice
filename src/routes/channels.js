const express = require('express');
const router = express.Router();
const channelController = require('../controllers/channels')

router.get('/', channelController.GetAllChannels)
router.get('/ports', channelController.GetAllUsedPorts)
router.post('/', channelController.CreateChannel)
router.post('/deploy/:channel_id', channelController.DeployChannel)
router.post('/undeploy/:channel_id', channelController.UndeployChannel)
router.delete('/:channel_id',channelController.DeleteChannel)

module.exports = router;