document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    axios.post(
      this.action,
      formData,
    ).then(function(response) {
      console.log(response);
      const tweets = document.querySelector('.tweets');
      let msg = response.data.message;
      let time = new Date(response.date.created_at);
      let tweet = document.createElement('li');
      let timetag = document.createElement('time');
      timetag.innerText = time;
      tweet.innerText = `${timetag}${msg}`;
      tweets.appendChild(tweet)
    }).catch(function(error) {
      console.log(error);
    });
  });
});