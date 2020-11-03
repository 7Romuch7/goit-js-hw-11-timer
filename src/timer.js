const refs = {
    daysTime: document.querySelector('.value[data-value="days"]'),
    hoursTime: document.querySelector('.value[data-value="hours"]'),
    minsTime: document.querySelector('.value[data-value="mins"]'),
    secsTime: document.querySelector('.value[data-value="secs"]'),
    timerId: document.querySelector('#timer-1'),
}

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    setInt = setInterval(() => {
    const nowDate = Date.now();
    const time = this.targetDate - nowDate;
    this.updateClockface(time);
this.timeFinish(time);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.daysTime.textContent = `${days}`;
    refs.hoursTime.textContent = `${hours}`;
    refs.minsTime.textContent = `${mins}`;
    refs.secsTime.textContent = `${secs}`;
  }
   
    pad(value) {
        return String(value).padStart(2, "0");
    }
  
    timeFinish(time) {
        if (time < 0) {
            clearInterval(this.setInt);
            refs.timerId.textContent = "Finish";
        }
    }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date('November 15, 2020'),
});