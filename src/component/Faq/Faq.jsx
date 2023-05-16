import React from "react";

const Faq = () => {
  return (
    <div>
      <div
        className="accordion w-75 mx-auto mt-5"
        id="accordionPanelsStayOpenExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Discription #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              culpa recusandae tempore perspiciatis. Necessitatibus dolores
              cumque officiis nesciunt, voluptas iusto blanditiis, velit quidem
              eum fugiat nihil ipsam sequi a eveniet molestias! Facere tenetur
              aliquid aperiam doloremque blanditiis consequatur iste ducimus.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Discription #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium placeat voluptas vero. Quos quia, quod tenetur minus
              sint id! Rerum sit odio praesentium nam velit in autem
              reprehenderit harum eveniet officiis, animi tempore cumque odit
              fuga nesciunt minima. Voluptate, tenetur!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Discription #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, omnis illo perspiciatis dignissimos at hic soluta!
              Laudantium excepturi repellat labore nisi error nihil eaque
              perferendis a? Suscipit consequatur nemo, sed debitis earum alias
              ipsam eum tenetur eos dolore pariatur, fugiat provident ratione
              officiis reprehenderit, obcaecati dicta dignissimos accusamus
              mollitia ad!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFourth">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFourth"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFourth"
            >
              Discription #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFourth"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFourth"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, omnis illo perspiciatis dignissimos at hic soluta!
              Laudantium excepturi repellat labore nisi error nihil eaque
              perferendis a? Suscipit consequatur nemo, sed debitis earum alias
              ipsam eum tenetur eos dolore pariatur, fugiat provident ratione
              officiis reprehenderit, obcaecati dicta dignissimos accusamus
              mollitia ad!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
