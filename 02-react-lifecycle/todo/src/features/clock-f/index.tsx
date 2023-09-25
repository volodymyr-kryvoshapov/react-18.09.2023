import React from 'react';

interface ClockProps {
  initialDate: Date,
}

export function ClockF({ initialDate }: ClockProps) {
  const [date, setDate] = React.useState(initialDate);

  React.useEffect(() => {
    const tick = () => {
      const date = new Date();
      setDate(date);
      console.log('tick', date.toLocaleTimeString());
    }
    const intervalId = setInterval(() => tick(), 1000);

    return () => clearInterval(intervalId);
  }, [initialDate]);
  // no second argument - (componentDidMount + componentDidUpdate) without condition
  // [] - componentDidMount
  // [initialDate] - componentDidMount + componentDidUpdate
  // return () => clearInterval(intervalId); - componentWillUnmount

  return (
    <div>
      <h1>Clock On Function Component</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}