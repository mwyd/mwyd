import React from "react";
import NavBar from "../components/navigation/nav-bar";

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <div className="flex flex-col w-full h-screen">
      <NavBar/>
      <div className="w-full h-full mt-14 overflow-auto">
        <main className="w-full max-w-hd mx-auto px-4">
          {children}
        </main>
      </div>
    </div>
  );
}