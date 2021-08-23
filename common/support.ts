export const send = ({ name, email, twitter, message, webhook }) => {
  let twitterURL = '';
  if (twitter) {
    const twitterProfileURL = `https://twitter.com/${twitter.replace('@', '')}`;
    twitterURL = `<${twitterProfileURL}|${twitter}>`;
  }
  try {
    webhook.send({
      text: `\n*Name:* ${name}\n*Email:* ${email}\n*Twitter:* ${twitterURL}\n*Message:* ${message}`,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const apply = ({ name, provider, configuration, message, webhook }) => {
  try {
    webhook.send({
      text: `\n*Name:* ${name}\n*Provider/MinerID:* ${provider}\n*Configuration:* ${configuration}\n*Message:* ${message}`,
    });
    return true;
  } catch (e) {
    return false;
  }
};
