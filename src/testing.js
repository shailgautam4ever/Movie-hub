const a = () => {
  try {
    // undefined.a;
    const deno = 0;
    if (deno === 0) {
      throw new Error(`Can't Divide by 0`);
    }
  } catch (error) {
    // console.log("error 1", error);
    throw new Error(error.message);
  }
};

function aa() {
  try {
    const { value } = a();
    console.log(value);
  } catch (error) {
    console.log("error 2", error.message);
  }
}
aa();
