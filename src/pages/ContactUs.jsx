import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import ContactUsInfo from "../components/ContactUsInfo";
import { MdEmail } from "react-icons/md";
import InputField from "../components/InputField";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject:"",
    msg: "",
  });

  const [error, setError] = useState({});
  const form = useRef();

  const formConfig = (formData) => {
    let errorMsg = {};
    if (!formData.name) {
      errorMsg.name = "Name must be required!";
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
      errorMsg.email ="Please enter a valid email address!"
    }
    if (!formData.email) {
      errorMsg.email = "Email must be required!";
    }
    if(!formData.subject){
      errorMsg.subject="Subject must be required"
    }
    if (!formData.msg) {
      errorMsg.msg = "Message must be required";
    }
    setError(errorMsg);
    return errorMsg;
  };

  const formHandler = (e) => {
    e.preventDefault();
    const resultForm = formConfig(formData);
    if (Object.keys(resultForm).length == 0) {
      emailjs
        .sendForm(
          "service_dh8n7fb",
          "template_fkn5hkk",
          form.current,
          "kzrxob_WR9dfP8GgS"
        )
        .then(
          () => {
            alert(
              "Your message has been sent successfully! We will get back to you shortly."
            );
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Failed to send message. Please try again.");
          }
        );

      setFormData({ name: "", email: "", msg: "",subject:"" });
    }
    console.log(formData);
  };
  return (
    <section className="contact-us-section">
      <div className="form-section">
        <h1 className="form-title">Sent us a message</h1>
        <p className="scoot-request">
          Have questions or need help with our tutorials or Scoot services? Send us a message and we’ll get back to you soon.
        </p>

        <form ref={form} className="contact-form" onSubmit={formHandler}>
          <InputField
            name={"from_name"}
            type={"text"}
            value={formData.name}
            placeholder={"Enter your name"}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            error={error.name}
          />

          <InputField
            name={"from_email"}
            type={"text"}
            value={formData.email}
            placeholder={"Enter your email"}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            error={error.email}
          />

          <InputField
            name={"subject"}
            type={"text"}
            value={formData.subject}
            placeholder={"Enter your subject"}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, subject: e.target.value }))
            }
            error={error.subject}
          />

          <InputField
            name={"message"}
            type={"text"}
            value={formData.msg}
            placeholder={"Enter your message"}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, msg: e.target.value }))
            }
            error={error.msg}
          />
          <button>Sent Now</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
