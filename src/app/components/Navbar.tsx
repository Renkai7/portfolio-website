"use client";

import { Home, User, Briefcase } from "lucide-react";
import { NavBar } from "@/app/components/tubelight-navbar";

export default function Navbar() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/projects", icon: Briefcase },
  ];

  return <NavBar items={navItems} />;
}
