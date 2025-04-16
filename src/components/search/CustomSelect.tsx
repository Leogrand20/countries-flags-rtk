import Select, { Props } from "react-select";

import { useRegion } from "../../hooks/useRegion";
import { Region } from "../../types/regions";

import styles from "./Search.module.css";

export type CountryOption =
  | {
      label: Region;
      value: Region;
    }
  | "";

function CountrySelect(props: Props<CountryOption, false>) {
  return <Select {...props} />;
}

type RegionOption = {
  [RegKey in Region]: { value: RegKey; label: RegKey };
};

const optionsMap: RegionOption = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "America", label: "America" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};

const options = Object.values(optionsMap);

export const CustomSelect = () => {
  const [region, setRegion] = useRegion();

  return (
    <CountrySelect
      placeholder="Filter by Region"
      className={styles["select"]}
      options={options}
      value={region ? optionsMap[region] : ""}
      onChange={setRegion}
      isClearable
      isSearchable={false}
      styles={{
        control: (provided) => ({
          ...provided,
          height: "50px",
          border: "none",
          borderRadius: "var(--radii)",
          padding: "0.25rem",
          color: "var(--colors-text)",
          backgroundColor: "var(--colors-ui-base)",
          boxShadow: "var(--shadow)",
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: "pointer",
          color: "var(--colors-text)",
          backgroundColor: state.isSelected
            ? "var(--colors-bg)"
            : "var(--colors-ui-base)",
        }),
      }}
    />
  );
};
