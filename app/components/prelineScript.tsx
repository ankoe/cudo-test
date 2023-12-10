"use client";

import { usePathname } from "next/navigation";
import { HSDropdown, HSToggleCount } from "preline";
import { useEffect } from "react";

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      HSDropdown.autoInit()
      HSToggleCount.autoInit()
    }, 100);
  }, [path]);

  return null;
}