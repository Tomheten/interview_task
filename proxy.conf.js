const userInfo = {
  name: 'Pete',
  age: 100,
  licenses: [1230, 3213]
}

const licenses = [
  {
    id: userInfo.licenses[0],
    name: 'can_dig',
    description: 'This license confirms that the recipient of it can dig'
  },
  {
    id: userInfo.licenses[1],
    name: 'can_rest',
    description: 'This license confirms that the recipient of it can rest'
  }
]

const PROXY_CONF = {
  '/proxy': {
    // secure,
    changeOrigin: true,
    logLevel: 'debug',
    bypass: (req, res, proxyOptions) => {
      if (req.url.includes('users')) {
        res.end(JSON.stringify(userInfo));
        return true;
      } else if (req.url.includes('licenses')) {
        res.end(JSON.stringify(licenses));
        return true;
      } else {
        throw new Error('There is not stubs for http request in proxy server!')
      }
    },
  },
};

module.exports = PROXY_CONF;
