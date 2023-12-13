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
      <h2 className="pb-4 text-center text-2xl text-blue-600">
        Fill out the form and tell me where you want me to travel!
      </h2>

      <div className="flex justify-center text-xl text-blue-600">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 rounded-2xl border border-blue-600 p-4 shadow-md"
        >
          <div className="flex flex-col">
            <label htmlFor="name">What's your name?</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={inputHandler}
              className="rounded-md border border-blue-600"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="city">Where do you think I should visit?</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={inputHandler}
              className="rounded-md border border-blue-600"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date">Best time to go?</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={inputHandler}
              className="rounded-md border border-blue-600"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">
              Points of interest and other suggestions?
            </label>
            <textarea
              id="message"
              value={message}
              onChange={inputHandler}
              rows="10"
              cols="30"
              className="rounded-md border border-blue-600"
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
