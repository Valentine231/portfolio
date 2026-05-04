"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useTheme() {
  const queryClient = useQueryClient();

  const { data: theme = "dark" } = useQuery({
    queryKey: ["theme"],
    queryFn: () => {
      if (typeof window !== "undefined") {
        return (localStorage.getItem("theme") as "dark" | "light") || "dark";
      }
      return "dark";
    },
    staleTime: Infinity,
  });

  const mutation = useMutation({
    mutationFn: async (newTheme: "light" | "dark") => {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
        const root = window.document.documentElement;
        if (newTheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
      return newTheme;
    },
    onSuccess: (newTheme) => {
      queryClient.setQueryData(["theme"], newTheme);
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme]);

  const setTheme = (newTheme: "light" | "dark") => {
    mutation.mutate(newTheme);
  };

  return { theme, setTheme };
}
