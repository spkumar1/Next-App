import Image from "next/image";
import wrapImage from "@/assets/images/wrap-img.png";
import vitImage from "@/assets/icons/vit.png";
import weight from "@/assets/icons/wgt.png";
import food from "@/assets/icons//food.png";
import i1 from "@/assets/icons/i1.png";
import i2 from "@/assets/icons/i2.png";
import i3 from "@/assets/icons/i3.png";
import i4 from "@/assets/icons/i4.png";
import i5 from "@/assets/icons/i5.png";
import i6 from "@/assets/icons/i6.png";
import Card from "@/components/Card";
import b1 from "@/assets/images/b1.png";
import b2 from "@/assets/images/b2.png";
import b3 from "@/assets/images/b3.png";
import b4 from "@/assets/images/b4.png";
import b5 from "@/assets/images/b5.png";

export default function Home() {
  const wrapOptions = [
    {
      icon: vitImage,
      title: "Vitamins",
      describe: "Increased Vitamins and minerals in your diet",
    },
    {
      icon: weight,
      title: "Weight Loss",
      describe: " Weight Loss Find scientifically proven solutions",
    },
    {
      icon: food,
      title: "Functional Foods",
      describe: "Functional Foods From protein powers to baby formula",
    },
  ];
  const options = [
    {
      icon: i1,
      title: "clinically studied",
      describe:
        "All products that we offer have undergone lab and safety tests",
    },
    {
      icon: i2,
      title: "Vegetarian Friendly",
      describe:
        "We have a wide selection of vegetarian products to meet your needs",
    },
    {
      icon: i3,
      title: "Made in India",
      describe:
        "Shop local and explore health products made right here in India",
    },
    {
      icon: i4,
      title: "Free shipping",
      describe: "We deliver to your door with no shipping costs on your orders",
    },
    {
      icon: i5,
      title: "No Risk",
      describe:
        "We ensure that all products are safe and within their use-by date",
    },
    {
      icon: i6,
      title: "GMO free",
      describe:
        "Natural, no modified products and derivatives for those who need it",
    },
  ];
  const ingredients = [
    {
      title: "Vitamin C",
      des: "Vitamin C as ascorbic acid",
      icon: b1,
    },
    {
      title: "Vitamin B",
      des: "Niacin for healthy gut and skin",
      icon: b2,
    },
    {
      title: "Magnesium",
      des: "Boost energy and support muscle function",
      icon: b3,
    },
    {
      title: "Hyaluronic Acid",
      des: "For smooth supple and soft skin",
      icon: b4,
    },
  ];
  const latest = [
    {
      date: "20 apr",
      primaryTitle: "The covid-19 epidemic in 2022 is back",
      secondaryTitle: "The covid-19 epidemic in 2023 is back",
      secDate: "",
    },
    {
      date: "20 apr",
      primaryTitle: "The covid-19 epidemic in 2022 is back",
      secondaryTitle: "The covid-19 epidemic in 2023 is back",
      secDate: "",
    },
    {
      date: "20 apr",
      secDate: "",
      primaryTitle: "The covid-19 epidemic in 2022 is back",
      secondaryTitle: "The covid-19 epidemic in 2023 is back",
    },
    {
      date: "20 Apr",
      secDate: "17 mar",
      primaryTitle: "The covid-19 epidemic in 2022 is back",
      secondaryTitle: "Hac headrerit mus nons semper suspendisse",
    },
  ];
  return (
    <main className="min-h-dvh">
      <section className="bg-[#E2F5FB] mx-3 md:mx-8 text-center min-h-dvh">
        <h4 className="text-[2rem] md:text-[4rem] lg:text-[6rem] text-[#003569] font-bold py-8">
          Essential Vitamins
        </h4>
        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="flex items-start justify-center flex-col gap-4">
            <p className="text-[19px] text-secondary">Online Medical Special</p>
            <p className=" text-primary font-bold text-[1.5rem] w-[14rem] text-start">
              Get Your Vitamins & Minerals
            </p>
            <button>Explore</button>
          </li>
          <li className="relative mt-12 md:mt-0 bottle-background md:mx-12">
            <Image src={wrapImage} fill={true} alt="wrap" className="bot-top" />
          </li>
          <li>
            {wrapOptions.map((option, index) => (
              <div key={index} className="flex gap-5 mb-4">
                <Image
                  src={option.icon}
                  alt={option.title}
                  width={20}
                  height={20}
                  className="w-12 h-12"
                />
                <section className="text-start">
                  <h4 className="font-bold text-primary">{option.title}</h4>
                  <p className="text-xs mt-1 max-w-[12rem] text-secondary">
                    {option.describe}
                  </p>
                </section>
              </div>
            ))}
          </li>
        </ul>
      </section>
      <section className="relative wrapper">
        <div className="bg-primary  rounded-[5rem]  min-h-[25rem]  lg:mt-[-11rem] hidden lg:block"></div>
        <ul className="w-full bg-primary lg:bg-transparent rounded-[5rem] mt-4 md:mt-0  text-white grid grid-cols-1 md:grid-cols-2 lg:mt-[-11rem] lg:grid-cols-3 gap-4 p-8  lg:absolute  lg:top-[6rem]">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-white p-[2.3rem] rounded-[50%]">
                <Image
                  src={option.icon}
                  alt={option.title}
                  width={25}
                  height={25}
                />
              </div>
              <h6 className="font-bold text-lg  capitalize mt-4">
                {option.title}
              </h6>
              <p className="mt-2 text-[#D9D9D9] max-w-[21rem] text-xs capitalize text-center">
                {option.describe}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className="wrapper">
        <ul className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <li className="lg:col-span-2">
            <h6 className="text-primary font-bold text-sm uppercase">
              Ingredients
            </h6>
            <h4 className="mt-3 text-primary font-bold text-[1.5rem]">
              Better Ingredients
            </h4>
            <p className="text-sm mt-3 text-secondary">
              Only the best when you choose products offered on you
              platform-high-quality ingredients for high quality products!.
            </p>
          </li>
          {ingredients.map((item, i) => (
            <li
              key={i}
              className={` flex relative flex-col h-[11rem] rounded-lg bg-[#E2F5FB]`}
            >
              <div className="z-10 p-6 max-w-[14rem]">
                <h4 className="text-primary font-bold">{item.title}</h4>
                <p className="mt-4 text-secondary">{item.des}</p>
              </div>
              <a className="underline text-primary uppercase left-[23px] absolute z-10 bottom-3">
                See more
              </a>
              <Image src={item.icon} alt={item.title} fill />
            </li>
          ))}
          <li className="lg:col-span-2 flex gap-4">
            <div className="flex-1 p-6 flex relative flex-col h-[11rem] rounded-lg bg-[#E2F5FB] lg:col-span-2 ">
              <h4 className="text-primary font-bold">Lactobacillus</h4>
              <p className="mt-4 text-secondary">
                Invigorate your gut microbiome
              </p>
              <a className="underline text-primary uppercase left-[23px] absolute z-10 bottom-3">
                See more
              </a>
            </div>
            <div className="h-full w-[7rem]">
              <section className="half-circle"></section>
              <section className="bg-yellow-400 h-20 w-20  rounded-[50%]"></section>
            </div>
          </li>
        </ul>
        <p className="uppercase text-primary font-bold text-center">Our Blog</p>
        <h6 className="text-primary font-bold text-[2rem] text-center">
          Latest News
        </h6>
      </section>
      <ul className="flex   text-white gap-8 flex-wrap m-4 md:mx-16 items-center justify-center">
        {latest.map((item, i) => (
          <li key={i}>
            <Card
              index={i}
              secDate={item.secDate}
              date={item.date}
              primaryTitle={item.primaryTitle}
              secondaryTitle={item.secondaryTitle}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
