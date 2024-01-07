import { useState } from "react";

function TravelToForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    const submittedFormData = { name, city, date, message };
    setIsSubmited(true);
    console.log(submittedFormData); // needed
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
          className="flex flex-col items-center gap-4 rounded-2xl p-4 text-center shadow-md"
        >
          <div className="flex w-full flex-col">
            <label htmlFor="name">What's your name?</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={inputHandler}
              className="rounded bg-blue-50 p-2 text-center"
            ></input>
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="city">Where do you think I should visit?</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={inputHandler}
              className="rounded bg-blue-50 p-2 text-center"
            ></input>
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="date">And when?</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={inputHandler}
              className="w-full rounded bg-blue-50 p-2 text-center text-slate-400"
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
              placeholder="A restaurant or museum"
              className="rounded bg-blue-50 p-2 text-center"
            ></textarea>
          </div>
          {isSubmited ? (
            <button
              disabled
              className="w-6/12 rounded border-2 border-green-600 p-2 text-xl text-green-600 hover:bg-green-600 hover:text-white hover:transition-all"
            >
              Success!
            </button>
          ) : (
            <button className="w-6/12 rounded border-2 border-blue-600 p-2 text-xl text-blue-600 hover:bg-blue-600 hover:text-white hover:transition-all">
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default TravelToForm;
