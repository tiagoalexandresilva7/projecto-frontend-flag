import { useRef, useState } from "react";

function TravelToForm() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);

  const requiredField = useRef();
  const isRequiredFieldEmpty = requiredField.current?.value == "";

  function submitHandler(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    setIsSubmited(!isSubmited);
    form.reset();
    console.log(formObj); // needed
  }

  return (
    <>
      <h2 className="pb-4 text-center text-2xl font-bold text-accent">
        Fill out the form and tell me where you want me to travel!
      </h2>
      <section className="flex place-content-center p-4 text-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col place-content-center gap-4 rounded-2xl pb-4 text-center"
        >
          <div className="gap-8 md:flex md:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col pb-4">
                <label className="text-textcolor">
                  What's your name?
                  <input
                    type="text"
                    name="name"
                    className="w-full border-b-2 border-accent bg-transparent pt-2 text-center text-textcolor outline-0"
                  ></input>
                </label>
              </div>
              <div className="flex w-full flex-col pb-4">
                <label className="text-textcolor">
                  Where do you think I should visit?
                  <input
                    ref={requiredField}
                    placeholder={isSubmitButtonClicked ? "required" : null}
                    type="text"
                    name="city"
                    required
                    className={`w-full border-b-2 border-accent bg-transparent pt-2 text-center text-textcolor outline-0 ${
                      isSubmitButtonClicked && isRequiredFieldEmpty
                        ? "border-red-600 placeholder:text-xs placeholder:italic placeholder:text-red-600"
                        : null
                    }`}
                  ></input>
                </label>
              </div>
              <div className="flex w-full flex-col pb-4">
                <label className="text-textcolor">
                  And when?
                  <input
                    type="date"
                    name="date"
                    className="block w-full cursor-text border-b-2 border-accent bg-transparent p-1 text-center text-textcolor outline-0"
                  ></input>
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-textcolor">
                <p className="pb-1">Any particular point of interest?</p>
                <textarea
                  name="message"
                  rows="7"
                  cols="30"
                  placeholder="A restaurant or museum"
                  className="w-full rounded border-2 border-accent bg-transparent p-2 text-center text-textcolor outline-0"
                ></textarea>
              </label>
            </div>
          </div>
          {isSubmited ? (
            <>
              <button
                disabled
                className="mx-auto w-28 rounded border-2 border-green-600 bg-green-600 p-2 text-xl text-white"
              >
                Success*
              </button>
              <p className="mt-2 text-xs italic text-textcolor">
                *Check the console
              </p>
            </>
          ) : (
            <button
              type="submit"
              onClick={() => setIsSubmitButtonClicked(!isSubmitButtonClicked)}
              className="mx-auto w-28 rounded border-2 border-accent p-2 text-xl text-accent transition hover:bg-accent hover:text-background"
            >
              Submit
            </button>
          )}
        </form>
      </section>
    </>
  );
}

export default TravelToForm;
