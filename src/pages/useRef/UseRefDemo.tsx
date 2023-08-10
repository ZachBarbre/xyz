import { useState } from "react";
import { useMyRef } from "./useMyRef";

export function UseRefDemo() {
  const [renderNumber, setRenderNumber] = useState(1);
  const ref = useMyRef("this is the current ref");
  const [updateInput, setUpdateInput] = useState("");

  const code = `
  import { useState } from "react";

  export function useMyRef(initalValue: any) {
    const [ref] = useState({current: initalValue})

    return ref
  }`;

  return (
    <main className="container">
      <article>
        <p>
          Here, I'm mimicking the functionality of useRef using useState. Like a
          couple of other things in the playground, this is an interesting quiz
          from
          <a href="https://bytes.dev/share/cHVycGxlLWNvb2wtYml0ei5qcGc=">
            bytes.dev
          </a>
          .
        </p>
        <pre>
          <code>{code}</code>
        </pre>
      </article>
      <p>ref current = {ref.current}</p>
      <button
        onClick={() => setRenderNumber((renderNumber) => renderNumber + 1)}
      >
        Cause rerender #{renderNumber}
      </button>
      <input
        value={updateInput}
        onChange={(evt) => setUpdateInput(evt.target.value)}
        placeholder="ref update text"
        type="text"
      />
      <button onClick={() => (ref.current = updateInput)}>Update Ref</button>
    </main>
  );
}
