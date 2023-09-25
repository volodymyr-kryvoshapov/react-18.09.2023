import React from 'react';

interface ClockProps {
  initialDate: Date,
}

interface ClockState {
  date: Date,
}

export class Clock extends React.Component<ClockProps, ClockState> {
  intervalId: any;

  constructor(props: ClockProps) {
    super(props);

    this.state = {
      date: props.initialDate,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  tick() {
    const date = new Date();
    this.setState({
      date
    });
    console.log('tick', date.toLocaleTimeString());
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>, prevState: Readonly<ClockState>, snapshot?: any) {
    if (prevProps.initialDate !== this.props.initialDate) {
      // make server request
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>Clock On Class Component</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}