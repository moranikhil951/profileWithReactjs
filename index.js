const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="min-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profileImg"
      />
      <h1 className="NameProfile">Kiran V</h1>
      <p class="para">
        Vishnu Institution of computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watchImg"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
