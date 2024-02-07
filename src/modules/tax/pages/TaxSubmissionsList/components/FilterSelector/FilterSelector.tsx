import { Select, FormLabel, FormControl } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface Props {
  filters: string[];
  title: string;
  value: string;
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSelector = ({ value, title, filters, onSelect }: Props) => {
  return (
    <FormControl mx="6">
      <FormLabel textAlign="center">{title}</FormLabel>
      <Select placeholder="Select filter" value={value} onChange={onSelect}>
        {filters.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default FilterSelector;
