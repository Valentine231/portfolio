"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, Home, User, Briefcase, Mail } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useTheme } from "@/hooks/useTheme";

export function CommandMenu() {
  const router = useRouter();
  const { isCommandMenuOpen: open, setCommandMenuOpen: setOpen } = useStore();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[20vh]">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={() => setOpen(false)} 
      />
      
      <div className="relative w-[90vw] max-w-lg overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950">
        <Command className="w-full">
          <div className="flex items-center border-b border-gray-200 px-3 dark:border-gray-800">
            <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
            <Command.Input
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-100"
              placeholder="Type a command or search..."
            />
            <button
              onClick={() => setOpen(false)}
              className="ml-2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              ESC
            </button>
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-gray-500">
              No results found.
            </Command.Empty>
            <Command.Group heading="Navigation" className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/"))}
                className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/about"))}
                className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
              >
                <User className="mr-2 h-4 w-4" />
                About
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/projects"))}
                className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/contact"))}
                className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Command.Item>
            </Command.Group>
            <Command.Group heading="Theme" className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2 mt-2">
              <Command.Item
                onSelect={() => {
                  setTheme("dark");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
              >
                Dark Mode
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  setTheme("light");
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
              >
                Light Mode
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
