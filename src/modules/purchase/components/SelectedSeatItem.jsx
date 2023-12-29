import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function SelectedSeatItem({ label, children }) {
  return (
    <div className="flex py-4 border-b border-b-gray-400">
      <Typography variant="h6" className="text-gray-800 min-w-[30%] text-left">
        {label} :
      </Typography>
      <Typography variant="h6" className="text-title-main">
        {children}
      </Typography>
    </div>
  );
}
