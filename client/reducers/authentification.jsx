export default function (token = null, action) {
  switch (action.type) {
    case 'addToken':
      return action.token;
    default:
      return token;
  }
}
