import SectionBg from "../components/SectionBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const formData = [
    {
      label: "Your Name",
      placeholder: "Abc",
    },
    {
      label: "Email Adress",
      placeholder: "email@email.com",
    },
    {
      label: "Subject",
      placeholder: "This is an optional",
    },
    {
      label: "Message",
      placeholder: "Hi! i’d like to ask about",
    },
  ];

  const contactData = [
    {
      icon: <FontAwesomeIcon icon="fa-solid fa-location-dot" />,
      title: "Adress",
      text: "236 5th SE Avenue, New York NY10000, United States",
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

      <div className="container mx-auto flex flex-col items-center text-center text-balance">
        <h3 className="text-3xl font-semibold">Get In Touch With Us</h3>
        <p className="w-[80%]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="my-20 grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            {contactData.map((data) => (
              <div
                className="grid grid-cols-[repeat(2,fit-content)] justify-start gap-x-2 text-start"
                key={data.title}
              >
                {data.icon}
                <h4 className="font-semibold">{data.title}</h4>
                {typeof data.text === "string" ? (
                  <p className="col-start-2 text-balance">{data.text}</p>
                ) : (
                  <div className="col-start-2 text-balance">
                    <p>{data.text.firstText}</p>
                    <p>{data.text.secondText}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <form
            className="flex flex-col items-start gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {formData.map((data) => (
              <div className="flex flex-col items-start" key={data.label}>
                <label className="font-semibold">{data.label}</label>
                <input
                  className="rounded-2xl border-2 border-gray-500 p-5"
                  type="text"
                  placeholder={data.placeholder}
                />
              </div>
            ))}

            <button className="btn--yellow">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
