export type SearchProps = {
  onSearch: (
    search: string | undefined,
    region: string,
    sortMode: string | null,
  ) => void;
};
