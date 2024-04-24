import { Suspense } from "react";
import AppBar from "../AppBAr/AppBar";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>......loader</div>}>{children}</Suspense>
    </>
  );
}
