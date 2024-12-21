import phone from "@/assets/icons/Component-2.svg.png";
import email from "@/assets/icons/Component-2-1.svg.png";
import location from "@/assets/icons/Component-2-2.svg.png";
import logo from "@/assets/images/image.png";
import Image from "next/image";
import loc from "@/assets/icons/Frame.png";
const Footer = () => {
  const contact = [
    { image: phone, title: "Phone Number", details: "+97431181843" },
    { image: email, title: "Email Address", details: "Elbrithcqhr@gmail.com" },
    {
      image: location,
      title: "Office Location",
      details: "Ambassador Street, Zone 61,",
    },
  ];

  return (
    <footer className="  bg-primary py-12 text-white">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 wrapper">
        {contact.map((item, i) => (
          <li
            key={i}
            className="bg-[#215D72] rounded-3xl p-4 flex gap-4 items-center"
          >
            <Image
              src={item.image}
              height={150}
              width={20}
              className="w-auto h-16"
              alt="footer"
            />
            <div className="flex flex-col  ">
              <span className="text-[14px]">{item.title}</span>
              <span className="text-[12px]">{item.details}</span>
            </div>
          </li>
        ))}
      </ul>
      <section className="flex flex-wrap items-center gap-5 md:items-start wrapper pt-12 ">
        <Image
          src={logo}
          height={104}
          width={104}
          alt="big star"
          className="h-16 bg-white p-4 w-auto"
        />
        <p className="max-w-[23rem]  text-[12px]">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
        <p className="flex basis-full items-center text-[12px]">
          <Image
            src={loc}
            width={10}
            height={10}
            alt="img"
            className="mr-1 w-auto h-[1rem]"
          />{" "}
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </p>
      </section>
    </footer>
  );
};

export default Footer;
