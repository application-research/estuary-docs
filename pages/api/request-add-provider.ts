const NODE = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE === 'production';

if (!IS_PRODUCTION) {
  require('dotenv').config();
}

import * as S from '@common/server';
import * as Support from '@common/support';

import { IncomingWebhook } from '@slack/webhook';

export default async function apiRequestInvite(req, res) {
  await S.cors(req, res);

  const url = process.env.ARG_MINERS;
  const webhook = new IncomingWebhook(url);

  await Support.apply({
    name: req.body.name,
    provider: req.body.provider,
    configuration: req.body.configuration,
    message: req.body.message,
    webhook,
  });

  res.json({ success: true });
}
