class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time , callback) {
    if (!time || !callback) {
        throw new Error ('Отсутствуют обязательные аргументы');
    } else if (this.alarmCollection.find(func => time) === time) {
        console.warn ('Уже присутствует звонок на это же время');
    }
    let canCall = callback(true);

    return this.alarmCollection.push ({time, callback, canCall});
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(func =>  func.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5); 
  }

  start() {
    let checkTime = (time) => {
      let alarm = this.getCurrentFormattedTime();
      if (time === alarm) {
        this.canCall = false;
        return this.callback();
      }
    }

    if (this.intervalId !== null) {
        return;
    } else {
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(time => checkTime(time))
        }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}