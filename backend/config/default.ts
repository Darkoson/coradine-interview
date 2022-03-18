export default {
  dbUri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster-01.z3ewq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};
