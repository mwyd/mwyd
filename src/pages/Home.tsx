import React from "react";
import DefaultLayout from "../layouts/default-layout";

export default function HomePage() {
  return (
    <DefaultLayout>
      <header className="w-full h-main-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          <div>Hello!</div>
          <div>I am <span className="text-red-500">Michał</span></div>
          <div>Full Stack Developer</div>
        </h1>
      </header>
    </DefaultLayout>
  );
}