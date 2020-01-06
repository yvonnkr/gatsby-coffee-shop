import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead textmuted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              debitis aut voluptatem ex hic quidem reiciendis cupiditate quo
              rerum laborum suscipit incidunt, delectus culpa? Rerum laboriosam,
              in earum dicta accusantium ipsa commodi amet tenetur fuga esse
              numquam quaerat consectetur saepe quasi, optio distinctio,
              veritatis dolores quo error. Corrupti, nulla deleniti.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">about</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
