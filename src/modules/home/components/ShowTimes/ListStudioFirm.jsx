import React from 'react';
import ListStudioFirmItem from './ListStudioFirmItem';
import Schedule from './Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListStudioFirm() {
  return (
    <div>
      <div className="mt-16 bg-white rounded-md">
        <div className="content__item ">
          <ListStudioFirmItem />
        </div>
        <div className="ListFirm">
          <Schedule />
        </div>
      </div>
    </div>
  );
}
