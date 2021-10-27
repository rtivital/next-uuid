import React from "react";
import { useUuid } from "./SsrProvider";

export function Test2() {
  const uuid = useUuid();
  return <div>Test 2, uuid = {uuid}</div>;
}
