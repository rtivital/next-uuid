import React from "react";
import { useUuid } from "./SsrProvider";

export function Test1() {
  const uuid = useUuid();
  return <div>Test 1, uuid = {uuid}</div>;
}
