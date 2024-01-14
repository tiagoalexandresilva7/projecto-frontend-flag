function About() {
  return (
    <>
      <section className="px-4 pt-28 xl:flex">
        <figure className="mx-auto h-96 overflow-hidden shadow-xl md:h-[450px] lg:h-[550px]">
          <img
            src="https://koreus.cdn.li/media/201709/pilote-avion-selfie.jpg"
            alt="a plane pilot taking a selfie while flying"
            className="zoom h-full w-full"
          />
        </figure>
        <article className="px-4 pt-4 text-xl xl:w-3/5 xl:pt-0">
          <p>
            Hi! I'm Tiago, a travel lover and a aspiring programmer. I have a
            passion for learning new things and having new adventures.
          </p>
          <p className="pb-4">
            Some of my favorite hobbies are swimming and cooking, and I love
            going to the beach. You will often find me in places where I can
            enjoy the sun, the sea, and the sand.
          </p>
          <p className="pb-4">
            I started this blog in 2023 as the very first project of my new
            programming career. I wanted to combine my love for travel and
            coding, and create a platform where I can share my experiences and
            skills with others. Here you will find interesting and useful travel
            content, such as destination guides, travel hacks, budget tips and
            more.
          </p>
          <p className="pb-4">
            Whether you are a traveller, a programmer, or both, I hope you will
            find something valuable and enjoyable on this blog. You can also
            follow me on GitHub and LinkedIn, where I post more updates and
            snippets from my projects.
          </p>
          <p className="pb-4">
            Thank you for visiting and for your support. If you want to chat
            with me, feel free to send me an email or a message on LinkedIn. I
            always love to hear from you.
          </p>
          <p>Happy travels and happy coding!</p>
          <p className="pb-4">Tiago</p>
        </article>
      </section>
    </>
  );
}

export default About;
