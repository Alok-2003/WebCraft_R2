import React, { useState } from 'react';




const Calendar = ({ events }) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const [clickedEvent, setClickedEvent] = useState(null);

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfWeek = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const generateDaysArray = () => {
        const totalDays = getDaysInMonth(currentMonth, currentYear);
        return Array.from({ length: totalDays }, (_, i) => i + 1);
    };

    const handleDayClick = (day) => {
        const clickedDate = new Date(currentYear, currentMonth, day);
        const clickedEvent = events.find((event) => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === clickedDate.getDate() && eventDate.getMonth() === clickedDate.getMonth();
        });
        if (clickedEvent) {
            setClickedEvent(clickedEvent); // Assuming you have a state variable to hold the clicked event
        } else {
            setClickedEvent(null); // Reset the clicked event if no event is found
        }
    };

    // In the return statement of your Calendar component


    return (
        <div className="calendar">
            <h2 className="text-2xl font-semibold mb-4">
                {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-semibold">{day}</div>
                ))}
                {[...Array(getFirstDayOfWeek(currentMonth, currentYear)).keys()].map((_, index) => (
                    <div key={`empty-${index}`}></div>
                ))}
                {generateDaysArray().map((day) => (
                    <div
                        key={day}
                        className={`cursor-pointer text-center p-2 rounded-full ${events.some((event) => {
                            const eventDate = new Date(event.date);
                            return eventDate.getDate() === day && eventDate.getMonth() === currentMonth;
                        }) ? 'bg-blue-500 text-white' : ''
                            }`}
                        onClick={() => handleDayClick(day)}
                    >
                        {day}
                    </div>
                ))}

            </div>
            {clickedEvent && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">{clickedEvent.eventName}</h3>
                    <p className="text-sm text-gray-600">Date: {clickedEvent.date}</p>
                    {/* Add additional event details here */}
                </div>
            )}

        </div>
    );
};

export default Calendar;
