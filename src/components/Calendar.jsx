import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

function Calendar() {
  return (
    <div className='card-element row-span-6 d-flex flex-column'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                defaultValue={dayjs(new Date())}
                views={['year', 'month', 'day']}
            />
        </LocalizationProvider>
    </div>
  );
}

export default Calendar