import React from 'react';

interface ClockProps {
  initialDate: Date,
}

export class Clock extends React.Component {
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

  componentDidUpdate(prevProps: Readonly<{ initialDate: Date }>, prevState: Readonly<{}>, snapshot?: any) {
    // @ts-ignore
    const { initialDate } = this.props;
    const { initialDate: prevInitialDate } = prevProps;

    if (initialDate !== prevInitialDate) {
      // make server request
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    // @ts-ignore
    const { date } = this.state;

    return (
      <div>
        <h1>Clock On Class Component</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}