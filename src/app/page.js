"use client";

import { GridContainer } from "@/components/GridContainer";
import { Card } from "../components/Card";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";

const data = [
  {
    title: "Hello",
    description: "Description",
  },
  {
    title: "Title",
    description: "Description",
  },
  {
    title: "Ronaldo",
    description: "Description",
  },
  {
    title: "Lebron",
    description: "Description",
  },
  {
    title: "Messi",
    description: "Description",
  },
  {
    title: "Sengur",
    description: "Description",
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="w-full min-h-[100vh] bg-[#f5f6f5] dark:bg-[#000]">
        <Navbar toggleTheme={handleClick} isDark={isDark} />

        <GridContainer>
          {data.map(({ title, description }) => (
            <Card key={title} title={title} description={description} />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
