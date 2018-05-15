import { ipcRenderer, remote } from 'electron';
import { UPDATE_API } from '../../../../common/ipc-api';

const originalCa = remote.getGlobal('ca');
var params = {
  ca: originalCa,
  port: 8090
};

ipcRenderer.on(UPDATE_API.REQUEST, (event, paramsIn) => {
  params.ca = paramsIn.ca;
  params.port = paramsIn.port;
});

export var apiParams = params;
