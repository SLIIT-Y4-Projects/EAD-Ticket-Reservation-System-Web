import React, { useContext } from "react";
import SampleContext from "../../contexts/SampleContext";

const SampleCreateUser = () => {
  const { createSample } = useContext(SampleContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSample = {
      title: e.target.title.value,
      content: e.target.content.value,
    };

    createSample(newSample);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Content
                  </label>
                  <input
                    type="text"
                    id="content"
                    placeholder="Content"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                type="submit"
              >
                Submit
              </button>
            </div>
        
        </div>
      </div>
      </form>
    </>
  );
};

export default SampleCreateUser;
