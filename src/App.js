import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="!#">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-logo-img.png"
              className="img1"
              alt="img"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a id="para1" className="nav-link active" href="!#">
                Home <span className="sr-only">(current)</span>
              </a>
              <a id="para1" className="nav-link" href="!#">
                Products
              </a>
              <a id="para1" className="nav-link" href="!#">
                Recent Blogs
              </a>
              <a id="para1" className="nav-link" href="!#">
                Delivery & Payments
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div class="vr-bg-container d-flex flex-column justify-content-center">
        <h1 class="heading">The Revolution in Virtual Reality</h1>
        <div class="d-flex flex-row justify-content-center">
          <button style={{ color: "white" }} className="butn btn btn-dark mt-2">
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
