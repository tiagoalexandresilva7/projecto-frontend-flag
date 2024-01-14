import { useRef, useState } from "react";

function TravelToForm() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
  const requiredField = useRef()

  function submitHandler(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    setIsSubmited(true);
    console.log(formObj); // needed
  }

  return (
    <>
      <h2 className="pb-4 text-center text-2xl font-bold text-blue-600">
        Fill out the form and tell me where you want me to travel!
      </h2>
      <section className="p-4 text-xl shadow-md">
        <form
          onSubmit={submitHandler}
          className="mx-auto flex flex-col place-content-center gap-4 rounded-2xl pb-4 text-center "
        >
          <div className="gap-8 md:flex md:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label>
                  What's your name?
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded bg-blue-50 p-2 text-center outline-blue-600"
                  ></input>
                </label>
              </div>
              <div className="flex w-full flex-col">
                <label>
                  Where do you think I should visit?
                  <input
                    ref={requiredField}
                    placeholder={
                      isSubmitButtonClicked ? "*required" : null
                    }
                    type="text"
                    name="city"
                    required
                    className={`w-full rounded bg-blue-50 p-2 text-center ${
                      isSubmitButtonClicked
                        ? "outline-red-600 placeholder:text-xs placeholder:text-red-600 placeholder:italic"
                        : "outline-blue-600"
                    }`}
                  ></input>
                </label>
              </div>
              <div className="flex w-full flex-col pb-2">
                <label>
                  And when?
                  <input
                    type="date"
                    name="date"
                    className="w-full rounded bg-blue-50 p-2 text-center outline-blue-600"
                  ></input>
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label>
                Any particular point of interest?
                <textarea
                  name="message"
                  rows="7"
                  cols="30"
                  placeholder="A restaurant or museum"
                  className="w-full rounded bg-blue-50 p-2 text-center outline-blue-600"
                ></textarea>
              </label>
            </div>
          </div>
          {isSubmited ? (
            <button
              disabled
              className="mx-auto w-28 rounded border-2 border-green-600 bg-green-600 p-2 text-xl text-white"
            >
              Success*
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => setIsSubmitButtonClicked(!isSubmitButtonClicked)}
              className="mx-auto w-28 rounded border-2 border-blue-600 p-2 text-xl text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
            >
              Submit
            </button>
          )}
          {isSubmited ? (
            <p className="mt-2 text-xs italic text-red-600">
              *Check the console
            </p>
          ) : null}
        </form>
      </section>
    </>
  );
}

export default TravelToForm;
