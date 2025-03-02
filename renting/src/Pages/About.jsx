import React from 'react';

const About = () => {
  return (
    <div className="h-[100vh] flex flex-col align-top bg-gradient-to-r  text-black p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-[100px]">About Me</h1>

      <div className=" bg-blue-400 p-5 rounded-lg">
      <p className="text-xl mb-4">
        I'm Priyanshu Kumar Pandey, currently pursuing my bachelor's degree in Electronics and Computer Engineering from VIT Chennai.
      </p>
      <p className=" text-xl mb-4">
        I have crafted numerous projects utilizing <span className="font-bold">HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, and Express.js</span>. Some of my notable projects include StreamLine Yt ,GitHub profile finder, shopping cart, password generator, Discord Clone, Microsoft Clone, VIT Cultural Fest Clone, and more. Check out my projects on <a className="text-yellow-300 font-bold hover:underline" href="https://github.com/rashup198">GitHub</a>.
      </p>
      <p className="text-xl mb-4">
        View my <a  className="text-yellow-300 font-bold hover:underline" href="https://drive.google.com/file/d/1z6Drd9-Cm4KkrQqZNuIFi53Bht6l0qSZ/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Resume</a>.
      </p>
      <p className= "text-xl mb-4">
        Explore my portfolio: <a  className="text-yellow-300 font-bold hover:underline" href="https://priyanshupandey.tech/" target="_blank" rel="noopener noreferrer">Portfolio</a>.
      </p>
      </div>
    </div>
  );
};

export default About;
