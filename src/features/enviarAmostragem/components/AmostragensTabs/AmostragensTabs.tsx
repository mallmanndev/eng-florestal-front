/* eslint-disable react/no-array-index-key */
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useState } from 'react';
import { TAmostragemTab } from '../../types/tabs';

type TAmostragemTabsProps = {
  tabs: TAmostragemTab[];
};

const AmostragensTabs = ({ tabs }: TAmostragemTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      {tabs.map((item, key) => (
        <Tab key={`tab-${key}`} label={item.label} disabled={item.disabled} />
      ))}
    </Tabs>
  );
};

export default AmostragensTabs;
