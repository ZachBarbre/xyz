import { useState } from "react";

export function useMyRef(initalValue: any) {
  const [ref] = useState({current: initalValue})

  return ref
}