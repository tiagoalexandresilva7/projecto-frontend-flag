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
      <h2 className="text-shadow-grey pb-4 text-center text-2xl font-bold">
        Fill out the form and tell me where you want me to travel!
      </h2>
      <section className="flex place-content-center p-4 text-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col place-content-center gap-4 rounded-2xl pb-4 text-center"
        >
          <div className="gap-8 md:flex md:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label className="text-asphalt">
                  What's your name?
                  <input
                    type="text"
                    name="name"
                    className="bg-shadow-grey outline-charcoal w-full rounded p-2 text-center"
                  ></input>
                </label>
              </div>
              <div className="flex w-full flex-col">
                <label className="text-asphalt">
                  Where do you think I should visit?
                  <input
                    ref={requiredField}
                    placeholder={isSubmitButtonClicked ? "required" : null}
                    type="text"
                    name="city"
                    required
                    className={`bg-shadow-grey outline-charcoal w-full rounded p-2 text-center ${
                      isSubmitButtonClicked
                        ? "outline-red-600 placeholder:text-xs placeholder:italic placeholder:text-red-600"
                        : "outline-charcoal"
                    }`}
                  ></input>
                </label>
              </div>
              <div className="flex w-full flex-col pb-2">
                <label className="text-asphalt">
                  And when?
                  <input
                    type="date"
                    name="date"
                    className="bg-shadow-grey outline-charcoal w-full rounded p-2 text-center"
                  ></input>
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-asphalt">
                Any particular point of interest?
                <textarea
                  name="message"
                  rows="7"
                  cols="30"
                  placeholder="A restaurant or museum"
                  className="bg-shadow-grey outline-charcoal w-full rounded p-2 text-center placeholder:text-asphalt"
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
              className="border-shadow-grey text-shadow-grey hover:bg-shadow-grey hover:text-charcoal mx-auto w-28 rounded border-2 p-2 text-xl transition-all"
            >
              Submit
            </button>
          )}
          {isSubmited ? (
            <p className="text-shadow-grey mt-2 text-xs italic">
              *Check the console
            </p>
          ) : null}
        </form>
      </section>
    </>
  );
}

export default TravelToForm;
