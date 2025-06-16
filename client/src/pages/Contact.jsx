import ConfidenceBanner from "../components/ConfidenceBanner";
import SectionBg from "../components/SectionBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const formData = [
    {
      label: "Your Name",
      placeholder: "Abc",
      type: "text",
    },
    {
      label: "Email Adress",
      placeholder: "email@email.com",
      type: "email",
    },
    {
      label: "Subject",
      placeholder: "This is an optional",
      type: "text",
    },
    {
      label: "Message",
      placeholder: "Hi! i’d like to ask about",
      type: "text",
    },
  ];

  const contactData = [
    {
      icon: <FontAwesomeIcon icon="fa-solid fa-location-dot" />,
      title: "Adress",
      text: {
        firstText: "236 5th SE Avenue, New York",
        secondText: "NY10000, United States",
      },
    },
    {
      icon: <FontAwesomeIcon icon="fa-solid fa-phone" />,
      title: "Phone",
      text: {
        firstText: "Mobile: +(84) 546-6789",
        secondText: "Hotline: +(84) 456-6789",
      },
    },
    {
      icon: <FontAwesomeIcon icon="fa-solid fa-clock" />,
      title: "Working Time",
      text: {
        firstText: "Monday-Friday: 9:00 - 22:00",
        secondText: "Saturday-Sunday: 9:00 - 21:00",
      },
    },
  ];

  return (
    <section className="bg-white">
      <SectionBg name="Contact" />

      <div className="container mx-auto my-20 flex flex-col items-center text-center text-balance">
        <h3 className="text-3xl font-semibold">Get In Touch With Us</h3>
        <p className="mt-3 w-[80%]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="mt-20 grid w-full grid-cols-1 gap-20 px-5 sm:grid-cols-2 md:px-10">
          <div className="order-2 flex flex-col items-center gap-10 sm:order-1 sm:items-start">
            {contactData.map((data) => (
              <div
                className="grid grid-cols-[repeat(2,fit-content)] justify-center gap-x-2 text-start"
                key={data.title}
              >
                {data.icon}
                <h4 className="font-semibold">{data.title}</h4>

                <div className="col-start-2 text-balance">
                  <p>{data.text.firstText}</p>
                  <p>{data.text.secondText}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="order-1 flex flex-col items-center gap-8 sm:items-start"
            onSubmit={(e) => e.preventDefault()}
          >
            {formData.map((data) => (
              <div
                className="flex w-full flex-col items-start"
                key={data.label}
              >
                <label className="font-semibold">{data.label}</label>
                <input
                  className="w-full rounded-2xl border-2 border-gray-500 p-5"
                  type={data.type}
                  placeholder={data.placeholder}
                />
              </div>
            ))}

            <button className="btn--yellow rounded-xl px-20 py-3">
              Submit
            </button>
          </form>
        </div>
      </div>

      <ConfidenceBanner />
    </section>
  );
};

export default Contact;
