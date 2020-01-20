const store = require('./store')

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log('[Message Controller Error] los datos no fueron enviados')
      return reject("Los datos son incorrectos");
    }
    const fullMessage = {
      user,
      message,
      date: new Date()
    };

    store.add(fullMessage)
    resolve(fullMessage);
  });
};

const getMessages = () => {
  return new Promise((resolve, reject) => {
        resolve(store.list())
  })
}

module.exports = {
  addMessage,
  getMessages
};
