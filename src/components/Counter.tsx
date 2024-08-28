import { useStore } from "../store/store.ts";

export default function Counter() {
  const { count, inc, dec } = useStore();

  return (
    <div>
      <h1>React Count: {count}</h1>
      <button className="mx-2" onClick={inc}>
        Increment
      </button>
      <button className="mx-2" onClick={dec}>
        Decrement
      </button>
    </div>
  );
}
