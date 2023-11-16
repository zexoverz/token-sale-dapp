import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis excepturi possimus eius necessitatibus ratione earum sunt eos a ad libero repellendus, nostrum est voluptatibus animi pariatur cupiditate! Tenetur, recusandae?"
    },
    {
      title: "Mobile App",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis excepturi possimus eius necessitatibus ratione earum sunt eos a ad libero repellendus, nostrum est voluptatibus animi pariatur cupiditate! Tenetur, recusandae?"
    },
    {
      title: "Exchange Service",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis excepturi possimus eius necessitatibus ratione earum sunt eos a ad libero repellendus, nostrum est voluptatibus animi pariatur cupiditate! Tenetur, recusandae?"
    },
    {
      title: "Investment Project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis excepturi possimus eius necessitatibus ratione earum sunt eos a ad libero repellendus, nostrum est voluptatibus animi pariatur cupiditate! Tenetur, recusandae?"
    },
    {
      title: "Credit Card Use",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis excepturi possimus eius necessitatibus ratione earum sunt eos a ad libero repellendus, nostrum est voluptatibus animi pariatur cupiditate! Tenetur, recusandae?"
    },
    {
      title: "Planning",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis excepturi possimus eius necessitatibus ratione earum sunt eos a ad libero repellendus, nostrum est voluptatibus animi pariatur cupiditate! Tenetur, recusandae?"
    }
  ]
  
  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation" 
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                Meet our solution for you
              </h4>
              <p className="animation" 
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex officiis nulla natus, sint quia voluptates, modi earum sunt libero magnam doloremque tempora assumenda enim odio at. Aperiam, unde dolorum!
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {
            services.map((service, i) => (
              <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
                <div className="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 1}s`}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Service;
