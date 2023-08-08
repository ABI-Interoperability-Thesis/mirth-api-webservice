const express = require('express');
const router = express.Router();
const channelController = require('../controllers/channels');

router.get('/', channelController.GetAllChannels)
router.get('/deployed', channelController.GetAllDeployedChannels)
router.get('/ports', channelController.GetAllUsedPorts)
router.get('/:channel_id',channelController.GetChannel)
router.post('/', channelController.CreateChannel)
router.post('/create-channel', channelController.CreateGeneralChannel)
router.post('/deploy/:channel_id', channelController.DeployChannel)
router.post('/undeploy/:channel_id', channelController.UndeployChannel)
router.delete('/:channel_id',channelController.DeleteChannel)
router.get('/channel-info/:channel_id', channelController.GetChannelInfo)
router.get('/channel-port/:channel_id', channelController.GetChannelPort)
router.get('/system-info/about', channelController.AboutSystem)

module.exports = router;