'use strict';

import Client from './../Client/Client';

export default (client: Client, req: any, res: any): any => {
  if (client.nodes.has(req.params.uuid)) {
    const node = client.nodes.get(req.params.uuid);
    if (node.queue.has(req.params.suuid)) {
      return res.status(200).json(node.queue.get(req.params.suuid).toJSON());
    } else {
      return res.status(400).json({
        error: true,
        message: 'Song not found',
      });
    };
  } else {
    return res.status(400).json({
      error: true,
      message: 'Node not found',
    });
  };
};
