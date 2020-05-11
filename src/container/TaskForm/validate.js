const validate = (values) => {
  const error = [];
  const { title } = values;
  if (!title) {
    error.title = "Plz enter your title";
  } else if (title.trim() && title.length < 5) {
    error.title = "Your title must more than 5 letters";
  }
  return error;
};
export default validate;
