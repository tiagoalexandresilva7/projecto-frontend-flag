import { useState } from "react";

function TravelToForm() {
  // works as project guideline says
  // intend to add:
  // disabled submit button while submitting
  // success message after submitting

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const submittedFormData = { name, city, date, message };
    console.log(submittedFormData);
  }

  function inputHandler(event) {
    if (event.target.id == "name") {
      setName(event.target.value);
    } else if (event.target.id == "city") {
      setCity(event.target.value);
    } else if (event.target.id == "date") {
      setDate(event.target.value);
    } else if (event.target.id == "message") {
      setMessage(event.target.value);
    }
  }

  return (
    <>
      <h2 className="pb-6 text-center text-2xl font-bold text-blue-600">
        Fill out the form and tell me where you want me to travel!
      </h2>

      <div className="flex justify-center text-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 rounded-2xl p-4 text-center shadow-xl"
        >
          <div className="flex flex-col">
            <label htmlFor="name">What's your name?</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={inputHandler}
              placeholder="Tiago"
              className="rounded-full bg-blue-50 p-2 text-center"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="city">Where do you think I should visit?</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={inputHandler}
              placeholder="City"
              className="rounded-full bg-blue-50 p-2 text-center"
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="date">And when?</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={inputHandler}
              className="rounded-full bg-blue-50 p-2 text-center text-slate-400"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Any particular point of interest?</label>
            <textarea
              id="message"
              value={message}
              onChange={inputHandler}
              rows="7"
              cols="30"
              placeholder="Type here..."
              className="rounded-3xl bg-blue-50 p-2 text-center"
            ></textarea>
          </div>
          <button className="w-full rounded-full bg-blue-600 p-2 text-xl  text-white hover:transition-all hover:duration-300 hover:ease-in-out md:hover:shadow-xl lg:text-2xl">
            Travel!
          </button>
        </form>
      </div>
    </>
  );
}

export default TravelToForm;
