const hotClient = require('webpack-hot-middleware/client?noInfo=false&reload=true&timeout=10000');
hotClient.subscribe((e) => {
  if (e.action === 'reload') {
    window.location.reload();
  }
});