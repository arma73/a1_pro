import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
} from '@standalone/shared/ui';
import { capitalizeFirstLetter } from '@standalone/shared/auxiliaries';

import type { FC } from 'react';

export interface ConfigurableSelectProps {
  extraOptions?: Array<{ value: string; name: string }>;
  selectedOption: string;
  onValueChange: (value: string) => void;
  availableOptions: Array<string>;
}

const ConfigurableSelect: FC<ConfigurableSelectProps> = ({
  extraOptions,
  availableOptions,
  selectedOption,
  onValueChange,
}) => {
  return (
    <Select
      defaultValue={selectedOption}
      onValueChange={onValueChange}
      value={selectedOption}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {extraOptions &&
            extraOptions.map((option) => (
              <SelectItem value={option.value} key={option.name}>
                {option.name}
              </SelectItem>
            ))}
          <SelectSeparator />
          {availableOptions?.map((value) => (
            <SelectItem key={value} value={value}>
              {capitalizeFirstLetter(value)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ConfigurableSelect;
