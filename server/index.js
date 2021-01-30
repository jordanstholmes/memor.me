const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const logger = morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'short');
const PORT = process.env.PORT || 3000;

app.use(logger)
  .use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at port: ${PORT}`);
});
