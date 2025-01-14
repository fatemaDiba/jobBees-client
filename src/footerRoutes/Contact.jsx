import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Title from "../components/Title";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    Swal.fire({
      title: `Thank You, ${name}!`,
      text: "Your message has been received. We'll get back to you shortly!",
      icon: "success",
    });
    form.reset();
  };

  return (
    <div>
      <Title title="Contact Us"></Title>
      {/* Header Section */}
      <section className="container mb-12 mx-auto mt-24">
        <div className="md:w-8/12 mx-auto space-y-2 text-center">
          <h4 className="text-lg font-bold text-gray-600">Contact JobBees</h4>
          <h2 className="text-2xl md:text-3xl text-light-primary">
            Looking to Connect?
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Have questions about your career or hiring needs? Let's get in
            touch!
          </p>
        </div>
      </section>

      {/* Contact Options and Form */}
      <section className="pb-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-light-primary">
            Get in Touch with JobBees
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Whether you're a job seeker or an employer, we're here to help.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-8 mx-auto items-center w-9/12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                <FaPhone className="text-light-primary text-4xl" />
                <h4 className="text-lg font-semibold text-light-primary mt-4">
                  Phone
                </h4>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                <FaEnvelope className="text-light-primary text-4xl" />
                <h4 className="text-lg font-semibold text-light-primary mt-4">
                  Email
                </h4>
                <p className="text-sm text-gray-600">support@jobbees.com</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                <FaMapMarkerAlt className="text-light-primary text-4xl" />
                <h4 className="text-lg font-semibold text-light-primary mt-4">
                  Address
                </h4>
                <p className="text-sm text-gray-600">
                  45 Career Lane, Worksville
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white">
              <div className="mx-auto text-center">
                <h2 className="text-2xl font-bold text-light-primary">
                  Send Us a Message
                </h2>
                <p className="mt-4 text-gray-700 text-base">
                  We'd love to hear from you! Fill out the form below, and we'll
                  get in touch.
                </p>
                <div className="max-w-lg mx-auto mt-8">
                  <form onSubmit={handleContact}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="form-control">
                        <label className="label text-left">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label text-left">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <label className="label text-left">Message</label>
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="Your Message"
                        className="textarea textarea-bordered w-full"
                        required
                      ></textarea>
                    </div>
                    <div className="mt-6">
                      <button className="btn bg-light-primary/70 hover:bg-blue-700 text-white w-full">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
