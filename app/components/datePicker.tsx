"use client"
import React, { useState, useRef, useEffect } from "react";

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function daysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function startDay(month: number, year: number): number {
  return new Date(year, month, 1).getDay();
}

function monthName(month: number): string {
  return [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ][month];
}

function isSameDay(d1: Date | null, d2: Date | null): boolean {
  if (!d1 || !d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

const formatDate = (date: Date | null): string => {
  if (!date) return "";
  return date.toISOString().split("T")[0];
};

const CustomDatePicker: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const generateCalendarDays = (): (Date | null)[] => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const numDays = daysInMonth(month, year);
    const start = startDay(month, year);

    const days: (Date | null)[] = [];

    for (let i = 0; i < start; i++) {
      days.push(null);
    }

    for (let i = 1; i <= numDays; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className="w-full relative max-w-sm mb-24 text-black" ref={ref}>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </div>

      <input
        type="text"
        readOnly
        value={formatDate(selectedDate)}
        onClick={() => setShowCalendar((v) => !v)}
        placeholder="Select date"
        className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 cursor-pointer"
      />

      {showCalendar && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-300 p-3">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={handlePrevMonth}
              className="p-1 rounded hover:bg-gray-200"
              aria-label="Previous month"
              type="button"
            >
              ‹
            </button>
            <div className="font-semibold text-gray-700">
              {monthName(currentMonth.getMonth())} {currentMonth.getFullYear()}
            </div>
            <button
              onClick={handleNextMonth}
              className="p-1 rounded hover:bg-gray-200"
              aria-label="Next month"
              type="button"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-1">
            {WEEK_DAYS.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {generateCalendarDays().map((date, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (date) {
                    setSelectedDate(date);
                    setShowCalendar(false);
                  }
                }}
                disabled={!date}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
                  ${
                    date && isSameDay(date, selectedDate)
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100 text-black"
                  }
                  ${!date ? "cursor-default" : "cursor-pointer"}
                `}
                type="button"
              >
                {date ? date.getDate() : ""}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
