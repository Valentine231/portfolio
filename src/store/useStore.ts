"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

interface AppState {
  activeFilter: string;
  isCommandMenuOpen: boolean;
}

const defaultState: AppState = {
  activeFilter: "All",
  isCommandMenuOpen: false,
};

export function useStore() {
  const queryClient = useQueryClient();

  const { data } = useQuery<AppState>({
    queryKey: ["app-store"],
    queryFn: () => defaultState,
    initialData: defaultState,
    staleTime: Infinity,
  });

  const state = data || defaultState;

  const setActiveFilter = (filter: string) => {
    queryClient.setQueryData<AppState>(["app-store"], (old) => ({
      ...(old || defaultState),
      activeFilter: filter,
    }));
  };

  const setCommandMenuOpen = (isOpen: boolean) => {
    queryClient.setQueryData<AppState>(["app-store"], (old) => ({
      ...(old || defaultState),
      isCommandMenuOpen: isOpen,
    }));
  };

  return { ...state, setActiveFilter, setCommandMenuOpen };
}
