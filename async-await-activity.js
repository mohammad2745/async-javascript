const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Technical meeting',
      location: 'google meet',
      time: '10:00 am'
    };
    resolve(meetingDetails);
  } else {
    reject(new Error('meeting already scheduled'));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
}

  async function myMeeting () {
    try {
      const meetingDetails = await meeting;
      const calender = await addToCalender(meetingDetails);
      console.log(calender);
    } catch {
      console.log('an error found');
    }
  }

  myMeeting();