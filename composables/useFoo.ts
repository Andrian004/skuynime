export const useFoo = () => {
  // state
  const foo = useState<any>("foo", () => []);
  const errFoo = useState<any>("errFoo", () => []);

  // function/action
  const addFoo = (path: string, method: any, body?: {}) => {
    $fetch(`http://localhost:5000/${path}`, {
      method: method,
      body: body,
    })
      .then((result) => (foo.value = result))
      .catch((err) => (errFoo.value = err));
  };

  // global state or function
  return { foo, errFoo, addFoo };
};
