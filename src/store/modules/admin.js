// Import db from database
// Admin Registration and authentication
export default {
  namespaced: true,
  actions: {
    login(_, { email, password }) {
      console.log(email);
      console.log(password);
    },
  },
};
