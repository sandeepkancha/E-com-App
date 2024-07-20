/* eslint-disable jsx-a11y/anchor-is-valid */

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://via.placeholder.com/1500x500"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Featured Product 1</h5>
              <p>Some description for the first featured product.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://via.placeholder.com/1500x500"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Featured Product 2</h5>
              <p>Some description for the second featured product.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://via.placeholder.com/1500x500"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Featured Product 3</h5>
              <p>Some description for the third featured product.</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      {/* <!-- Categories Section --> */}
      <div class="container mt-5">
        <h2 class="text-center mb-4">Shop by Category</h2>
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/300x300"
                class="card-img-top"
                alt="Category 1"
              />
              <div class="card-body">
                <h5 class="card-title">Category 1</h5>
                <p class="card-text">Description for category 1.</p>
                <a href="#" class="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/300x300"
                class="card-img-top"
                alt="Category 2"
              />
              <div class="card-body">
                <h5 class="card-title">Category 2</h5>
                <p class="card-text">Description for category 2.</p>
                <a href="#" class="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/300x300"
                class="card-img-top"
                alt="Category 3"
              />
              <div class="card-body">
                <h5 class="card-title">Category 3</h5>
                <p class="card-text">Description for category 3.</p>
                <a href="#" class="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/300x300"
                class="card-img-top"
                alt="Category 4"
              />
              <div class="card-body">
                <h5 class="card-title">Category 4</h5>
                <p class="card-text">Description for category 4.</p>
                <a href="#" class="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Featured Products Section --> */}
      <div class="container mt-5">
        <h2 class="text-center mb-4">Featured Products</h2>
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/300x300"
                class="card-img-top"
                alt="Product 1"
              />
              <div class="card-body">
                <h5 class="card-title">Product 1</h5>
                <p class="card-text">$10.00</p>
                <a href="#" class="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/300x300"
                class="card-img-top"
                alt="Product 2"
              />
              <div class="card-body">
                <h5 class="card-title">Product 2</h5>
                <p class="card-text">$20.00</p>
                <a href="#" class="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/300x300"
                class="card-img-top"
                alt="Product 3"
              />
              <div class="card-body">
                <h5 class="card-title">Product 3</h5>
                <p class="card-text">$30.00</p>
                <a href="#" class="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="https://via.placeholder.com/300x300"
                class="card-img-top"
                alt="Product 4"
              />
              <div class="card-body">
                <h5 class="card-title">Product 4</h5>
                <p class="card-text">$40.00</p>
                <a href="#" class="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
