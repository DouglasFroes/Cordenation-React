import React from "react";
import moment from "moment";
import "moment/locale/pt-br";

function Contact({
  avatar,
  name,
  company,
  department,
  admissionDate,
  phone,
  country,
}) {
  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar" data-testid="contact-avatar">
        <img src={avatar} alt="" />
      </span>
      <span className="contact__data" data-testid="contact-name">
        {name}
      </span>
      <span className="contact__data" data-testid="contact-phone">
        {phone}
      </span>
      <span className="contact__data" data-testid="contact-country">
        {country}
      </span>
      <span className="contact__data" data-testid="contact-data">
        {moment(admissionDate).format("DD/MM/YYYY")}
      </span>
      <span className="contact__data" data-testid="contact-company">
        {company}
      </span>
      <span className="contact__data" data-testid="contact-department">
        {department}
      </span>
    </article>
  );
}

export default Contact;
